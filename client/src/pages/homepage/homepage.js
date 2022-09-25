import "./homepage.css";
import React from 'react';
export default function Homepage() {

    return (
        <>
    
            <p class="text">
                Adapt different animals from
                <span class="animal"> Dogs</span>,
                <span class="animal"> Cats</span>,
                <span class="animal"> Birds</span>,
                <span class="animal"> Fishes</span>,
                and if the law permits it a
                <span class="animal" > Monkey</span>
            </p>


            <div id="a">

                <div class="bg-image ">
                    <img src="./bird.jpg" height="300px"></img>
                </div>
                <div class="bg-image ">
                <img src="./cat.jpg" height="300px"></img>
                </div>
                <div class="bg-image3 ">
                <img src="./bird.jpg" height="300px"></img>
                </div>
                <div class="bg-image ">
                <img src="./cat.jpg" height="300px"></img>
                </div>
                <div></div>

                <div class="bg-image2 ">
                <img src="./dog.jpg" height="300px"></img>
                </div>
                <div class="bg-image2 ">
                <img src="./fish.jpg" height="300px"></img>
                </div>
                <div class="bg-image2 ">
                <img src="./dog.jpg" height="300px"></img>
                </div>
                <div class="bg-image2 ">
                <img src="./fish.jpg" height="300px"></img>
                </div>
                <div class="bg-image2 ">
                <img src="./dog.jpg" height="300px"></img>
                </div>
                <div></div>

                <div class="bg-image3 ">
                <img src="./monkey.jpg" height="300px"></img>
                </div>
                <div class="bg-image3 ">
                <img src="./bird.jpg" height="300px"></img>
                </div>
                <div class="bg-image3 ">
                <img src="./monkey.jpg" height="300px"></img>
                </div>
                <div class="bg-image3 ">
                <img src="./bird.jpg" height="300px"></img>
                </div>
            </div>
        

            <div class="block">
                <h2>Plan to Adapt a Pet?</h2>
                
                <div class="q">
                    <h3>Covid Requirements</h3>
                    <p>For the sake of animal safety, please submit proof of vaccination from the past 3</p>
                    <p>   Call Us at ###-###-####</p>
                </div>
            </div>
        <section id = "about_us">
            <img src="./LOGO.jpg" height="200px"></img>
            <h1>ABOUT US</h1>
            <p class = "text">
                We are <span>AddAPet</span>. A none profit association dedicated in finding
                and connecting owners with their special someone. Through your specifications
                we look at the closes adoption agencies giving you a range of pets 
                up for adoption.
            </p>
            <p class ="text">
                How do we do that?
                We look at a user's input of a radius which we look for adoption agencies for pets.
                From there, we get from them their entire database of avaliable pets which we show to
                our users. Our users will look through and "like" our dogs having a list of them to be able to ask about.
                We will have onsite support based on location to be able to ask questions.
                With a filter, we give the users options for types of pets ranging and limited by 
                what is they want to see.
            </p>
        </section>
        <footer>
            <p class ="footer">
                copyright, addapet, social media, etc~
            </p>
        </footer>
        </>
    )
}
