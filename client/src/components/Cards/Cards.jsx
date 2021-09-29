import React, { useState, useEffect } from 'react';
import { store } from '../../redux/store'
import Card from '../Card/Card'

export default function Cards () {
    const props = store.getState()
    console.log( props )
    let texto = props.reducer
    const id = 1
    return (
        <div>
            <Card key={id} props={texto} />
        </div>
    )
}