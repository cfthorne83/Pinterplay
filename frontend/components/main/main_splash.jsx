import React from 'react';

class MainSplash extends React.Component{

    render() {
        return (
            <div className="splash">
                <ul className='left'>
                    <img src="images/splash5.jpg" alt=""/>
                    <img src="images/splash10.jpg" alt=""/>
                </ul> 

                <section className="outer-section">
                    <section className="title-section">
                        <h1>Get your next</h1> 
                        <h1 id="highlight">brilliant idea here</h1>
                        <h1>. . . .</h1>
                    </section>

                    <section className="inner-section">
                        <ul className="outer">
                            <img src="images/splash7.jpg" alt=""/>
                            <img src="images/splash15.jpg" alt=""/>
                        </ul>


                        <ul className="middle-outer">

                            <img src="images/splash8.jpg" alt=""/>
                            <img src="images/splash3.jpg" alt=""/>
                        </ul>

                        <ul className="middle">
                            <img src="images/splash16.jpg" alt=""/>
                            <img src="images/splash9.jpg" alt=""/>
                        </ul> 

                        <ul className="middle-outer">
                            <img src="images/splash13.jpg" alt=""/>
                            <img src="images/splash2.jpg" alt=""/>
                        </ul>

                        <ul className="outer">
                            <img src="images/splash4.jpg" alt=""/>
                            <img src="images/splash11.jpg" alt=""/>
                        </ul>
                    </section>
                </section>

                <ul className='right'>
                    <img src="images/splash6.jpg" alt=""/>
                    <img src="images/splash14.jpg" alt=""/>
                </ul>
                
            </div>
        );
    }
}

export default MainSplash;