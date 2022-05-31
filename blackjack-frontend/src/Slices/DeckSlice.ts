import {createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import React from "react";
import axios from "axios";
import { ICard } from "../Interfaces/ICard";
import { IDeck } from "../Interfaces/IDeck";
import { IUser } from "../Interfaces/IUser";


interface DeckSliceState {
    loading: boolean,
    error: boolean,
    deck?: IDeck[],
    cards?: ICard[],
    playerHand?: ICard[],
    dealerHand?: ICard[]
}

const initialDeckState:DeckSliceState = {
    loading: false,
    error: false
}

/*
type userProfile = {
    id?: number | undefined,
    email: string | undefined,
    firstName: string | undefined,
    lastName: string | undefined,
    money: number | undefined
} 
*/

export const initializeDeck = createAsyncThunk(
    "deck/initialize",
    async (user:IUser, thunkAPI) => {
        try {
            
            const res = await axios.post("http://localhost:8000/deck/initialize", user);
            console.log(res.data);
            return res.data;
        } catch (e) {
            console.log(e);
        }
    }
)

export const getDeck = createAsyncThunk(
    "deck/getDeck",
    async (thunkAPI) => {
        try {
            
            const res = await axios.get("http://localhost:8000/deck/getDeck");
            console.log(res.data);
            return res.data;
        } catch (e) {
            console.log(e);
        }
    }
);

export const getDealPlayer = createAsyncThunk(
    "deck/getDealPlayer", 
    async (thunkAPI) => {
        try {
            
            const res = await axios.get("http://localhost:8000/deck/deal");
            console.log(res.data);
            return res.data;
        } catch (e) {
            console.log(e);
        }
    }
);
export const getDealDealer = createAsyncThunk(
    "deck/getDealDealer", 
    async (thunkAPI) => {
        try {
            
            const res = await axios.get("http://localhost:8000/deck/deal");
            console.log(res.data);
            return res.data;
        } catch (e) {
            console.log(e);
        }
    }
);

export const deckSlice = createSlice({
    name: 'deck',
    initialState: initialDeckState,
    reducers: {
        clearDeck: (state) => {
            state.deck = undefined;
        }
    },
    extraReducers: (builder) => {


        //reducers for shuffling deck

        builder.addCase(initializeDeck.pending, (state,action) =>{
            state.loading = true;
        });
        builder.addCase(initializeDeck.rejected, (state,action)=>{
            state.loading = false;
            state.error = true;
        });
        builder.addCase(initializeDeck.fulfilled, (state,action)=>{
            state.loading = false;
            state.error = false;
        });


        // reducers for deck

        builder.addCase(getDeck.pending, (state,action) =>{
            state.loading = true;
        });
        builder.addCase(getDeck.rejected, (state,action)=>{
            state.loading = false;
            state.error = true;
        });
        builder.addCase(getDeck.fulfilled, (state,action)=>{
            state.deck = action.payload;
            state.loading = false;
            state.error = false;
        });


        //reducers for player Hand

        builder.addCase(getDealPlayer.pending, (state,action) =>{
            state.loading = true;
        });
        builder.addCase(getDealPlayer.rejected, (state,action)=>{
            state.loading = false;
            state.error = true;
        });
        builder.addCase(getDealPlayer.fulfilled, (state,action)=>{
            state.playerHand += action.payload;
            state.loading = false;
            state.error = false;
        });

        // reducers for Dealer Hand

        builder.addCase(getDealDealer.pending, (state,action) =>{
            state.loading = true;
        });
        builder.addCase(getDealDealer.rejected, (state,action)=>{
            state.loading = false;
            state.error = true;
        });
        builder.addCase(getDealDealer.fulfilled, (state,action)=>{
            state.dealerHand += action.payload;
            state.loading = false;
            state.error = false;
        });


    }
});

export const {clearDeck} = deckSlice.actions;

export default deckSlice.reducer;