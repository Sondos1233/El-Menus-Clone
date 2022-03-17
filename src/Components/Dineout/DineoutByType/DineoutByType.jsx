import 'bootstrap/dist/css/bootstrap.min.css';
import './../Dineout.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function DineoutbyType(props) {

    return (
        <>
            <div className="my-4 col-md-4 col-6" >
                <div className="card">
                    <Link to={`/Restaurant/${props.Res.id}`}></Link>
                    <div className="card-body shadow shadow-lg">
                        <img src={props.Res.ImageURL}
                            alt="" className="card-img" style={{ width: "100%", height: "250px" }} />
                        <div className="Rest-box" style={{ display: "flex", flexDirection: "row" }}>
                            <div className="Rest-logo" style={{ width: "50px", height: "auto", margin: "10px" }}>
                                <img src={props.Res.ImageLogo}
                                    alt="" style={{ width: "100%", height: "45px", border: "2px solid lightgrey", borderRadius: "10px", boxShadow: "1px 1px 5px" }} />
                            </div>
                            <div className="Rest-data my-2">
                                <p className="Rest-type m-0" style={{ color: "lightgrey", fontSize: "12px", fontWeight: "700" }}>
                                    European Coffee & Drinks
                                </p>
                                <a href="#" className="Rest-name m-0" style={{ fontWeight: "700" }}>
                                    {props.Res.ResName}
                                </a>
                                <p className="Rest-rate m-0">
                                    <svg data-v-21f5376e="" data-v-34cbeed1="" height="14" width="14" viewBox="0 0 14 14" class="vue-star-rating-star" step="10"><linearGradient data-v-21f5376e="" id="m6ck1m" x1="0" x2="100%" y1="0" y2="0"><stop data-v-21f5376e="" offset="100%" stop-color="#faad1d"></stop> <stop data-v-21f5376e="" offset="100%" stop-color="#d8d8d8"></stop></linearGradient> <filter data-v-21f5376e="" id="vvdmam" height="130%" width="130%" filterUnits="userSpaceOnUse"><feGaussianBlur data-v-21f5376e="" stdDeviation="0" result="coloredBlur"></feGaussianBlur> <feMerge data-v-21f5376e=""><feMergeNode data-v-21f5376e="" in="coloredBlur"></feMergeNode> <feMergeNode data-v-21f5376e="" in="SourceGraphic"></feMergeNode></feMerge></filter> <polygon data-v-21f5376e="" points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14" fill="url(#m6ck1m)" stroke="#fff" filter="url(#vvdmam)"></polygon> <polygon data-v-21f5376e="" points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14" fill="url(#m6ck1m)" stroke="#999" stroke-width="0" stroke-linejoin="miter"></polygon> <polygon data-v-21f5376e="" points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14" fill="url(#m6ck1m)"></polygon></svg>
                                    <svg data-v-21f5376e="" data-v-34cbeed1="" height="14" width="14" viewBox="0 0 14 14" class="vue-star-rating-star" step="10"><linearGradient data-v-21f5376e="" id="m6ck1m" x1="0" x2="100%" y1="0" y2="0"><stop data-v-21f5376e="" offset="100%" stop-color="#faad1d"></stop> <stop data-v-21f5376e="" offset="100%" stop-color="#d8d8d8"></stop></linearGradient> <filter data-v-21f5376e="" id="vvdmam" height="130%" width="130%" filterUnits="userSpaceOnUse"><feGaussianBlur data-v-21f5376e="" stdDeviation="0" result="coloredBlur"></feGaussianBlur> <feMerge data-v-21f5376e=""><feMergeNode data-v-21f5376e="" in="coloredBlur"></feMergeNode> <feMergeNode data-v-21f5376e="" in="SourceGraphic"></feMergeNode></feMerge></filter> <polygon data-v-21f5376e="" points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14" fill="url(#m6ck1m)" stroke="#fff" filter="url(#vvdmam)"></polygon> <polygon data-v-21f5376e="" points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14" fill="url(#m6ck1m)" stroke="#999" stroke-width="0" stroke-linejoin="miter"></polygon> <polygon data-v-21f5376e="" points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14" fill="url(#m6ck1m)"></polygon></svg>
                                    <svg data-v-21f5376e="" data-v-34cbeed1="" height="14" width="14" viewBox="0 0 14 14" class="vue-star-rating-star" step="10"><linearGradient data-v-21f5376e="" id="m6ck1m" x1="0" x2="100%" y1="0" y2="0"><stop data-v-21f5376e="" offset="100%" stop-color="#faad1d"></stop> <stop data-v-21f5376e="" offset="100%" stop-color="#d8d8d8"></stop></linearGradient> <filter data-v-21f5376e="" id="vvdmam" height="130%" width="130%" filterUnits="userSpaceOnUse"><feGaussianBlur data-v-21f5376e="" stdDeviation="0" result="coloredBlur"></feGaussianBlur> <feMerge data-v-21f5376e=""><feMergeNode data-v-21f5376e="" in="coloredBlur"></feMergeNode> <feMergeNode data-v-21f5376e="" in="SourceGraphic"></feMergeNode></feMerge></filter> <polygon data-v-21f5376e="" points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14" fill="url(#m6ck1m)" stroke="#fff" filter="url(#vvdmam)"></polygon> <polygon data-v-21f5376e="" points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14" fill="url(#m6ck1m)" stroke="#999" stroke-width="0" stroke-linejoin="miter"></polygon> <polygon data-v-21f5376e="" points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14" fill="url(#m6ck1m)"></polygon></svg>
                                    <svg data-v-21f5376e="" data-v-34cbeed1="" height="14" width="14" viewBox="0 0 14 14" class="vue-star-rating-star" step="10"><linearGradient data-v-21f5376e="" id="m6ck1m" x1="0" x2="100%" y1="0" y2="0"><stop data-v-21f5376e="" offset="100%" stop-color="#faad1d"></stop> <stop data-v-21f5376e="" offset="100%" stop-color="#d8d8d8"></stop></linearGradient> <filter data-v-21f5376e="" id="vvdmam" height="130%" width="130%" filterUnits="userSpaceOnUse"><feGaussianBlur data-v-21f5376e="" stdDeviation="0" result="coloredBlur"></feGaussianBlur> <feMerge data-v-21f5376e=""><feMergeNode data-v-21f5376e="" in="coloredBlur"></feMergeNode> <feMergeNode data-v-21f5376e="" in="SourceGraphic"></feMergeNode></feMerge></filter> <polygon data-v-21f5376e="" points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14" fill="url(#m6ck1m)" stroke="#fff" filter="url(#vvdmam)"></polygon> <polygon data-v-21f5376e="" points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14" fill="url(#m6ck1m)" stroke="#999" stroke-width="0" stroke-linejoin="miter"></polygon> <polygon data-v-21f5376e="" points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14" fill="url(#m6ck1m)"></polygon></svg>
                                    <span style={{ color: "grey", fontSize: "12px" }}>
                                        {props.Res.Rate} Ratings
                                    </span>
                                </p>
                            </div>
                        </div>
                        <p className="Rest-address mx-2" style={{ fontWeight: "700", color: "grey" }}>
                            Royal Maadi Hotel, 11 Road 18, Maadi Sarayat
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}