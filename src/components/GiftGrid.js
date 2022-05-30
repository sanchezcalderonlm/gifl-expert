import React from "react";
import {GifGridItem} from "./GifGridItem";
import {useFetchGifts} from "./../hooks/useFetchGifts";

export const GiftGrid = ({category}) => {


    const {data:images, loading} = useFetchGifts(category);

    return (
        <>
            <h3 className="card animate__animated animate__fadeInDown">{category}</h3>
            {loading && <p className="animate__animated animate__flash">Loading</p>}
            <div className="card-grid">
                {
                    images.map(img => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </div>
        </>
    );
}