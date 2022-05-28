package com.revature.services;

import com.revature.models.*;
import com.revature.repository.DeckRepo;
import com.revature.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Service
@Transactional
public class DeckService {
    private DeckRepo dr;

    @Autowired
    public DeckService( DeckRepo dr ) {
        this.dr = dr;
    }

    /**
     * Creates a deck of 52 cards and shuffles it
     *
     * @param user
     * @return deck of shuffled 52 cards
     */
    public Deck initializeDeck( User user ) {
        Deck deck = new Deck();
        List<Card> lCards = new ArrayList<>();

        deck.setDeckId(generateUniqueId());

        for (Suit suit : Suit.values()) {
            for (Rank rank : Rank.values()) {
                lCards.add(new Card(rank, suit, deck));
            }
        }

        Collections.shuffle(lCards);

        deck.setCards(lCards);
        deck.setUser(user);
        deck.setDeckSize(52);

        return dr.save(deck);
    }

    /**
     * Retrieve a deck by Id
     *
     * @param id of the deck to be retrieved
     * @return deck
     */
    public Deck getDeck( int id ) {
        return dr.findDeckByDeckId(id);
    }

    /**
     * Removes a card from the top of the deck and return the card that was removed
     * Remove card from database
     *
     * @param deck
     * @return a card from the top of the deck
     */
    public Card dealCard( Deck deck ) {
        Card card = new Card();

        if (deck.getDeckSize() > 0) {
            card = deck.getCards().get(deck.getDeckSize() - 1);
            deck.getCards().remove(deck.getDeckSize() - 1);
            deck.setDeckSize(deck.getDeckSize() - 1);
        }

        System.out.println("Local: " + card);
        System.out.println("Size of Deck" + deck.getDeckSize());
        System.out.println("Size of Cards List: " + deck.getCards().size());
        return card;
    }

    /**
     * Generates a unique Id for the deck
     * @return
     */
    public int generateUniqueId () {
        int id = 0;

        while (dr.findDeckByDeckId(id) != null) {
            id += 1;
        }
        return id;
    }
}
