import {useParams} from 'react-router-dom';
import {Helmet} from 'react-helmet-async';
import {useEffect} from 'react';
import ReviewsList from '../../components/offer/reviews-list/reviews-list';
import ReviewForm from '../../components/offer/review-form/review-form';
import Gallery from '../../components/offer/gallery/gallery';
import Map from '../../components/map/map';
import RentalOfferList from '../../components/rental-offers-list/rental-offers-list';
import NotFoundPage from '../not-found-page/not-found-page';
import Loader from '../../components/loader/loader';
import OfferDescription from '../../components/offer/offer-description/offer-description';
import {AuthStatus, BookmarkButtonClass, ClassName, MAX_OFFER_PAGE_CARDS, RequestStatus} from '../../const';
import {useAppSelector} from '../../hooks/use-app-selector';
import {useAppDispatch} from '../../hooks/use-app-dispatch';
import {fetchComments, fetchNearestOffers, fetchOffer} from '../../store/api-actions';
import {offerSelectors} from '../../store/slices/offer-slice';
import {nearestOffersSelectors} from '../../store/slices/nearestOffers-slice';
import {userSelectors} from '../../store/slices/user-slice';
import {commentsSelectors} from '../../store/slices/comments-slice';
import BookmarkButton from '../../components/bookmark-button/bookmark-button';

const OfferPage = (): JSX.Element => {
  const offerRequestStatus = useAppSelector(offerSelectors.status);
  const nearestOffersRequestStatus = useAppSelector(nearestOffersSelectors.status);
  const authStatus = useAppSelector(userSelectors.authStatus);
  const offer = useAppSelector(offerSelectors.offer);
  const nearestOffers = useAppSelector(nearestOffersSelectors.nearestOffers)
    .slice(0, MAX_OFFER_PAGE_CARDS);
  const comments = useAppSelector(commentsSelectors.comments);

  const {offerId} = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    Promise.all([
      dispatch(fetchOffer(offerId as string)),
      dispatch(fetchNearestOffers(offerId as string)),
      dispatch(fetchComments(offerId as string)),
    ]);
  }, [dispatch, offerId]);

  if (offerRequestStatus === RequestStatus.Loading) {
    return <Loader />;
  }

  if (offerRequestStatus === RequestStatus.Failed || !offer) {
    return <NotFoundPage type='offer' />;
  }

  const {id, title, isPremium, isFavorite, city, images} = offer;

  return (
    <>
      <Helmet>
        <title>6 cities. Rental offer.</title>
      </Helmet>

      <main className="page__main page__main--offer">
        <section className="offer">
          <Gallery images={images} />
          <div className="offer__container container">
            <div className="offer__wrapper">
              {isPremium && <div className="offer__mark"><span>Premium</span></div>}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {title}
                </h1>
                <BookmarkButton
                  offerId={id}
                  isFavorite={isFavorite}
                  className={BookmarkButtonClass.Offer}
                />
              </div>
              <OfferDescription offer={offer} />
              <section className="offer__reviews reviews">
                <ReviewsList comments={comments} />
                {authStatus === AuthStatus.Auth && <ReviewForm id={offerId as string} />}
              </section>
            </div>
          </div>
          <Map
            offers={[offer, ...nearestOffers]}
            city={city}
            selectedOfferId={id}
            className={ClassName.OfferMap}
          />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            {nearestOffersRequestStatus === RequestStatus.Success &&
              <RentalOfferList
                classNamesList={'near-places__list'}
                classNameCard={ClassName.Offer}
                offers={nearestOffers}
              />}
            {nearestOffersRequestStatus === RequestStatus.Failed
             || nearestOffers.length === 0
             && <p style={{textAlign: 'center'}}>No places in the neighbourhood</p>}
          </section>
        </div>
      </main>
    </>
  );
};

export default OfferPage;
