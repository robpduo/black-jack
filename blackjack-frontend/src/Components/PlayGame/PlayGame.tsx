import React, { useEffect, useState } from 'react';
import './PlayGame.css';

import { useDispatch, useSelector } from 'react-redux';
import { IDeck } from '../../Interfaces/IDeck';

import { StartGameButton } from '../StartGameButton/StartGameButton';

import { AppDispatch, RootState } from '../../Store';

import { HitButton } from '../HitButton/HitButton';

// going inside PlaGamePage
export const PlayGame: React.FC<IDeck> = (deck: IDeck) => {
  const dispatch: AppDispatch = useDispatch();
  const isDeck = useSelector((state: RootState) => state.deck.isDeck);

  const deckInfo = useSelector((state: RootState) => state.deck.deck);
  const userInfo = useSelector((state: RootState) => state.user);

  const playerHand = useSelector((state: RootState) => state.deck);
  const dealerHand = useSelector((state: RootState) => state.deck);

  // console.log('coming from PlayGame line 24 ', isDeck);
  // console.log('coming from PlayGame line 25 ', deckInfo);
  console.log('coming from playerHand line 26 ', playerHand.playerHand);

  // const [chipCount, setChipCount] = useState(1000);
  // const [betAmount, setBetAmount] = useState(0);
  // const [lockedBet, setLockedBet] = useState(0);
  // const [previousBet, setPreviousBet] = useState(0);
  // const [dealerCount, setDealerCount] = useState(0);
  // const [playerCount, setPlayerCount] = useState(0);
  // const [isBlackjack, setIsBlackJack] = useState(false);
  // const [isPlayerBusted, setIsPlayerBusted] = useState(false);
  // //const [didDouble, setDidDouble] = useState(false);
  // const [isDealersTurn, setIsDealersTurn] = useState(false);
  // const [isDealerBusted, setIsDealerBusted] = useState(false);
  // const [isHandComplete, setIsHandComplete] = useState(true);
  // const [winner, setWinner] = useState("");

  /* useEffect(() => {
      if(dealerCount > 21) {
        setIsDealerBusted(true);
        setWinner("player");
        setIsHandComplete(true);
      }
      if(dealerCount >= 17 && dealerCount < 22 && isDealersTurn) {
        if(dealerCount > playerCount) {
          setWinner("dealer");
          setIsHandComplete(true);
        }
        if(dealerCount < playerCount && !isPlayerBusted) {
          setWinner("player")
          setIsHandComplete(true)
        }
        if(dealerCount === playerCount && !isPlayerBusted) {
          setWinner("push")
          setIsHandComplete(true)
        }
      }
      if(dealerCount < 17 && isDealersTurn && !isPlayerBusted) {
        setTimeout(() => {
          dispatch(getDealDealer())
        }, 500);
      }
    }, [dealerCount]) */

  // const [id, setId] = useState(userInfo.user?.id)
  // const [lockedBet, setLockedBet] = useState(0)
  // const [previousBet, setPreviousBet] = useState(0)
  // const [dealerCount, setDealerCount] = useState(0)
  // const [playerCount, setPlayerCount] = useState(0)

  // const handleStandButton = () => {

  //   if (deckInfo && playerHand) {
  //     dispatch(getDealDealer);
  //   }

  // }

  // useEffect(() => {
  //   console.log('coming from PlayGame line 93 ', deckInfo);
  // }, [deckInfo]);

  // let imgPath = '../../images';
  let imageArray = [
    { suit: 'SPADES', rank: 'ACE', path: '../../images/SPADESACE.png' },
    { suit: 'SPADES', rank: 'TWO', path: '../../images/SPADESTWO.png' },
    { suit: 'SPADES', rank: 'THREE', path: '../../images/SPADESTHREE.png' },
    { suit: 'SPADES', rank: 'FOUR', path: '../../images/SPADESFOUR.png' },
    { suit: 'SPADES', rank: 'FIVE', path: '../../images/SPADESFIVE.png' },
    { suit: 'SPADES', rank: 'SIX', path: '../../images/SPADESSIX.png' },
    { suit: 'SPADES', rank: 'SEVEN', path: '../../images/SPADESEVEN.png' },
    { suit: 'SPADES', rank: 'EIGHT', path: '../../imageS/SPADESEIGHT.png' },
    { suit: 'SPADES', rank: 'NINE', path: '../../images/SPADESNINE.png' },
    { suit: 'SPADES', rank: 'TEN', path: '../../images/SPADESTEN.png' },
    { suit: 'SPADES', rank: 'JACK', path: '../../images/SPADESJACK.png' },
    { suit: 'SPADES', rank: 'QUEEN', path: '../../images/SPADESQUEEN.png' },
    { suit: 'SPADES', rank: 'KING', path: '../../images/SPADESKING.png' },
    { suit: 'HEARTS', rank: 'ACE', path: '../../images/HEARTSACE.png' },
    { suit: 'HEARTS', rank: 'TWO', path: '../../images/HEARTSTWO.png' },
    { suit: 'HEARTS', rank: 'THREE', path: '../../images/HEARTSTHREE.png' },
    { suit: 'HEARTS', rank: 'FOUR', path: '../../images/HEARTSFOUR.png' },
    { suit: 'HEARTS', rank: 'FIVE', path: '../../images/HEARTSFIVE.png' },
    { suit: 'HEARTS', rank: 'SIX', path: '../../images/HEARTSSIX.png' },
    { suit: 'HEARTS', rank: 'SEVEN', path: '../../images/HEARTSSEVEN.png' },
    { suit: 'HEARTS', rank: 'EIGHT', path: '../../images/HEARTSEIGHT.png' },
    { suit: 'HEARTS', rank: 'NINE', path: '../../images/HEARTSNINE.png' },
    { suit: 'HEARTS', rank: 'TEN', path: '../../images/HEARTSTEN.png' },
    { suit: 'HEARTS', rank: 'JACK', path: '../../images/HEARTSJACK.png' },
    { suit: 'HEARTS', rank: 'QUEEN', path: '../../images/HEARTSQUEEN.png' },
    { suit: 'HEARTS', rank: 'KING', path: '../../images/HEARTSKING.png' },
    { suit: 'CLOVERS', rank: 'ACE', path: '../../images/CLOVERSACE.png' },
    { suit: 'CLOVERS', rank: 'TWO', path: '../../images/CLOVERSTWO.png' },
    { suit: 'CLOVERS', rank: 'THREE', path: '../../images/CLOVERSTHREE.png' },
    { suit: 'CLOVERS', rank: 'FOUR', path: '../../images/CLOVERSFOUR.png' },
    { suit: 'CLOVERS', rank: 'FIVE', path: '../../images/CLOVERSFIVE.png' },
    { suit: 'CLOVERS', rank: 'SIX', path: '../../images/CLOVERSSIX.png' },
    { suit: 'CLOVERS', rank: 'SEVEN', path: '../../images/CLOVERSSEVEN.png' },
    { suit: 'CLOVERS', rank: 'EIGHT', path: '../../images/CLOVERSEIGHT.png' },
    { suit: 'CLOVERS', rank: 'NINE', path: '../../images/CLOVERSNINE.png' },
    { suit: 'CLOVERS', rank: 'TEN', path: '../../images/CLOVERSTEN.png' },
    { suit: 'CLOVERS', rank: 'JACK', path: '../../images/CLOVERSJACK.png' },
    { suit: 'CLOVERS', rank: 'QUEEN', path: '../../images/CLOVERSQUEEN.png' },
    { suit: 'CLOVERS', rank: 'KING', path: '../../images/CLOVERSKING.png' },
    { suit: 'DIAMONDS', rank: 'ACE', path: '../../images/DIAMONDSACE.png' },
    { suit: 'DIAMONDS', rank: 'TWO', path: '../../images/DIAMONDSTWO.png' },
    { suit: 'DIAMONDS', rank: 'THREE', path: '../../images/DIAMONDSTHREE.png' },
    { suit: 'DIAMONDS', rank: 'FOUR', path: '../../images/DIAMONDSFOUR.png' },
    { suit: 'DIAMONDS', rank: 'FIVE', path: '../../images/DIAMONDSFIVE.png' },
    { suit: 'DIAMONDS', rank: 'SIX', path: '../../images/DIAMONDSSIX.png' },
    { suit: 'DIAMONDS', rank: 'SEVEN', path: '../../images/DIAMONDSSEVEN.png' },
    { suit: 'DIAMONDS', rank: 'EIGHT', path: '../../images/DIAMONDSEIGHT.png' },
    { suit: 'DIAMONDS', rank: 'NINE', path: '../../images/DIAMONDSNINE.png' },
    { suit: 'DIAMONDS', rank: 'TEN', path: '../../images/DIAMONDSTEN.png' },
    { suit: 'DIAMONDS', rank: 'JACK', path: '../../images/DIAMONDSJACK.png' },
    { suit: 'DIAMONDS', rank: 'QUEEN', path: '../../images/DIAMONDSQUEEN.png' },
    { suit: 'DIAMONDS', rank: 'KING', path: '../../images/DIAMONDSKING.png' },
  ];

  return (
    <>
      <div className="gameContainer">
        <div className="selectionArea">
          <h1>BlacKing</h1>
          <StartGameButton />
          <HitButton />

          <button>Stand</button>
          <button>Value</button>
          <button>Score</button>
        </div>

        <div className="playArea">
          <h1> dealer </h1>

          <div className="dealContainer">
            {isDeck !== false &&
              deckInfo?.cards?.slice(0, 2)?.map((card) => {
                let suit1 = card.suit.toString();
                let rank1 = card.rank.toString();
                let path1 = suit1.split('').join().replace(/,/g, '');
                let path2 = rank1.split('').join().replace(/,/g, '');
                let imagePath = '../../images/' + path1 + path2;

                return (
                  <img
                    key={card.suit + '' + card.rank}
                    src={`${imagePath}.png`}
                    alt={`${card.suit}${card.rank}`}
                  />
                );
              })}
          </div>

          <div className="userContainer">
            <h1>User</h1>
            {isDeck !== false &&
              deckInfo?.cards?.slice(0, 2)?.map((card) => {
                let suit1 = card.suit.toString();
                let rank1 = card.rank.toString();
                let path1 = suit1.split('').join().replace(/,/g, '');
                let path2 = rank1.split('').join().replace(/,/g, '');
                let imagePath = '../../images/' + path1 + path2;

                return (
                  <img
                    key={card.suit + '' + card.rank}
                    src={`${imagePath}.png`}
                    alt={`${card.suit}${card.rank}`}
                  />
                );
              })}
          </div>
        </div>

        {/* {isDeck !== false && (
          <div className="playArea">
            <h1> dealer </h1>
            {playerHand?.map((hand) => {
              <div className="dealContainer" key={hand.id}>
                <img src={`../../images/${hand.suit}${hand.rank}`} />

              </div>;
            })}

            <div className="userContainer">
              <h1>User</h1>
              <img src={spadeAce} />
              <img src={heartKing} />
            </div>
          </div>
        )} */}
      </div>
    </>
  );
};
