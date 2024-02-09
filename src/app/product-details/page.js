const page = () => {
    return (
        <div>

            <header>
                <div class="flexBox">

                    <div class="left-section">EUKAMI</div>
                    <div class="mid-section">
                        <div>HOME</div>
                        <div>HEADPHONES</div>
                        <div>SPEAKERS</div>
                        <div>EARPHONES</div>

                    </div>
                    <div class="right-section">
                        <div style={{position: "relative"}}>
                            <img title="Cart" class="cart-image" src="Images/cart-image.png " />
                            <div id="cart-notification">
                                <span id="cart-number">3 </span>
                            </div>
                        </div>
                    </div>

                </div>
            </header>

            <main>

                <div class="back"> <div class="back-button">Go Back</div></div>

                <div id="container1">

                    <div> <img src="Images/headphone.png" id="headphone1" /></div>

                    <div class="prouctDetailDiv">
                        <div id="newProduct"> NEW PRODUCT</div>
                        <div id="row2"> <h2 class="productName">X99 MARK II <br /> HEADPHONES</h2></div>
                        <div> <p id="productInfo" class="bodyText"> The new XX99 Mark II headphones is the pinnicale of pristine <br /> audio. It redefines your premium headphone experience by <br /> reproducing the balance depth and precision of studio-quality <br /> sound.</p></div>
                        <div><h4 class="price">$2,999</h4></div>
                        <div class="quantity-cart"> 

                            <div class="quantity-bar"> 
                                <button title="remove" class="minus" onclick="remove()">-</button>
                                <input type="text" id="quantity" name="quantity" value="1" min="1" max="99" />
                                <button title="add" class="plus" onclick="add()">+</button>
                            </div>

                            <div> 
                                <button class="cart">ADD TO CART</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container2">

                    <div>
                        <p class="h3" id="feature-text" >FEATURES</p>
                        <p id="feature-text" class="bodyText"> Featuring a genuine leather head strap and premium earcups, these headphones deliver <br /> superior comfort for thse who like to enjoy endless listening. It includes intuitive controls <br /> desgined for any situation. Whether you're taking a business call or just in your own <br /> personal space, the auto on.off and pause features ensure that you'll never miss a beat.</p>
                        <p id="feature-text" class="bodyText"> The advanced Active Noise Cancellation with built-in equalizer allow you to experience <br /> your audio wordl on your terms. It lets you enjoy your audio in peace, but quickly interact <br /> with your surroundings when you need to. Combined with Bluetooth 5.0 compliant <br /> conncextivity and 17 hour bountery life, the XX99 MARK II headphones give you superior <br /> sound, cutting-edge technology, and a modern design.</p>
                    </div>

                    <div>
                        <h3 class="h3">IN THE BOX</h3>
                        <p class="bodyText"><span class="specs">1x</span> &nbsp; &nbsp; Headphone Unit</p>
                        <p class="bodyText"><span class="specs">2x</span> &nbsp; &nbsp; Replacement Earcups</p>
                        <p class="bodyText"><span class="specs">1x</span> &nbsp; &nbsp; UserManual</p>
                        <p class="bodyText"><span class="specs">1x</span> &nbsp; &nbsp; 3.5mm 5m Audio Cable</p>
                        <p class="bodyText"><span class="specs">1x</span> &nbsp; &nbsp; TravelBag</p>

                    </div>

                </div>

                <div class="container3">

                    <div>
                        <div class="image-container"> <img class="hp2" src="Images/hp2.png" /> </div>
                        <div class="image-container"> <img class="hp3" src="Images/hp3.png" /> </div>
                    </div>
                    <div class="ph1Image-container">
                        <img class="ph1" src="Images/hp1.png" />
                    </div>
                </div>
                <div class="container4">
                    <p class="h3" id="subtitle" >YOU MAY ALSO LIKE</p>
                </div>

                <div class="container5">

                    <div>
                        <div id="hp4"> <img class="c5-images" src="Images/hp4.png" /></div>
                        <div class="h4" id="hp4-name"> XX99 MARK I</div>
                        <button id="product-button"> SEE PRODUCT</button>
                    </div>

                    <div >
                        <div id="hp4"> <img class="c5-images" src="Images/hp5.png" /></div>
                        <div class="h4" id="hp5-name"> XX59 </div>
                        <button id="product-button"> SEE PRODUCT</button>
                    </div>


                    <div >
                        <div id="hp4"> <img class="c5-images" src="Images/hp6.png" /></div>
                        <div class="h4" id="hp6-name"> ZX9 SPEAKER </div>
                        <button id="product-button"> SEE PRODUCT</button>
                    </div>



                </div>

                <div class="containerU">

                    <div id="hp4">
                        <img class="c5-images" id="u1" src="Images/hp7.png" />

                    </div>

                    <div id="hp4" >
                        <img class="c5-images" id="u2" src="Images/hp8.png" />
                    </div>


                    <div id="hp4">
                        <img class="c5-images" id="u3" src="Images/hp9.png" />

                    </div>



                </div>


                <div class="container6">
                    <div class="c6-left " >
                        <h1 class="h2"> BRINGING YOU THE <br /> <span id="span-text"> BEST </span> AUDIO GEAR</h1>
                        <p class="bodyText">Located at the heart of New York City, Audiophile is the premier <br /> store for high end headphones, earphones, speakers and audio <br /> accessories. We have a large showroom and luxury <br /> demonstration rooms available for you to browse and <br /> experience a range of our products. Stop by our store to <br /> meet some of the fantastic people who make Audiophile the <br /> best place to buy your portable audio equipment.  </p>
                    </div>
                    <div class="c6-right"> <img src="Images/hp10.png" class="hp10" /></div>

                </div>


            </main>

            <footer>
                <div class="container7">
                    <div class="c7-left">
                        <div class="f-logo-container">EUKAMI</div>
                        <div class="f-text"> Eukami is all in one stop to fulfill your audio needs. We're a small team <br /> of music lovers and sound specalists who are devoted to helping you get the <br /> most out of personal audio. Come and Vist our demo facility - we're open 7 <br /> days a week.</div>
                        <div class="f-text"> <b>Copyright 2021. All Rights Reserved</b></div>
                    </div>
                    <div class="c7-right">
                        <div class="f-menu">

                            <div id="f-menu-buttons" class="f-menu-text">HOME</div>
                            <div id="f-menu-buttons" class="f-menu-text">HEADPHONES</div>
                            <div id="f-menu-buttons" class="f-menu-text">SPEAKERS</div>
                            <div id="f-menu-buttons" class="f-menu-text">EARPHONES</div>
                        </div>
                        <div>
                            <img class="pictograms" src="Images/links.png" />
                        </div>
                    </div>

                </div>

            </footer>

            <script src="product-page.js"></script>

        </div>
    );
}

export default page;