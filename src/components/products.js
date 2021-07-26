import React from 'react'
import {CircleFill} from 'react-bootstrap-icons'

function Products() {
    return (
        <div>
            <div className="container py-4">
                <h4>
                    Mens Fashion Store      
                </h4>
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                        <li class="breadcrumb-item"><a href="#">Products</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Data</li>
                    </ol>
                </nav>
            </div>
            <div className ="row">
        
                <div className ="col-md-3">
                    
                    <div style={{height:"80vh", width:"250px" }} className="overflow-auto">
                    <div className="container d-flex justify-content-between align-items-center py-3">
                        <b>FILTERS</b> 
                        <button className ="btn btn-outline-secondary btn-sm">Reset All</button>
                    </div>
                        <div className="accordion" id="accordionPanelsStayOpenExample">

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                Categories
                            </button>
                            </h2>
                            <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                            <div className="accordion-body ps-4">
                                
                                <div className="form-check ps-">
                                    <input className="form-check-input me-4" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" for="flexCheckDefault">
                                        Innerwear
                                    </label>
                                </div>

                                <div className="form-check ps-">
                                    <input className="form-check-input me-4" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" for="flexCheckDefault">
                                        Loungewear
                                    </label>
                                </div>

                                <div className="form-check ps-">
                                    <input className="form-check-input me-4" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" for="flexCheckDefault">
                                        Kurtas
                                    </label>
                                </div>

                                <div className="form-check ps-">
                                    <input className="form-check-input me-4" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" for="flexCheckDefault">
                                        Shoes
                                    </label>
                                </div>

                                <div className="form-check ps-">
                                    <input className="form-check-input me-4" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" for="flexCheckDefault">
                                        Slippers
                                    </label>
                                </div>

                                <div className="form-check ps-">
                                    <input className="form-check-input me-4" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" for="flexCheckDefault">
                                        Suits
                                    </label>
                                </div>

                                <div className="form-check ps-">
                                    <input className="form-check-input me-4" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" for="flexCheckDefault">
                                        T-Shirts
                                    </label>
                                </div>

                                <div className="form-check ps-">
                                    <input className="form-check-input me-4" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" for="flexCheckDefault">
                                        Trackpants
                                    </label>
                                </div>

                                <div className="form-check ps-">
                                    <input className="form-check-input me-4" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" for="flexCheckDefault">
                                        Trousers
                                    </label>
                                </div>
                            </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                color
                            </button>
                            </h2>
                            <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                            <div className="accordion-body ps-4">
                                <div className="form-check ps-">
                                    <input className="form-check-input me-4" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" for="flexCheckDefault">
                                      <CircleFill className="me-2" style ={{color:"black"}}/> Black
                                    </label>
                                </div>

                                <div className="form-check ps-">
                                    <input className="form-check-input me-4" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" for="flexCheckDefault">
                                      <CircleFill className="me-2" style ={{color:"#f5f5f5"}}/> White
                                    </label>
                                </div>

                                <div className="form-check ps-">
                                    <input className="form-check-input me-4" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" for="flexCheckDefault">
                                      <CircleFill className="me-2" style ={{color:"red"}}/> Red
                                    </label>
                                </div>

                                <div className="form-check ps-">
                                    <input className="form-check-input me-4" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" for="flexCheckDefault">
                                      <CircleFill className="me-2" style ={{color:"teal"}}/> Teal
                                    </label>
                                </div>

                                <div className="form-check ps-">
                                    <input className="form-check-input me-4" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" for="flexCheckDefault">
                                      <CircleFill className="me-2" style ={{color:"blue"}}/> Blue
                                    </label>
                                </div>

                                <div className="form-check ps-">
                                    <input className="form-check-input me-4" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" for="flexCheckDefault">
                                      <CircleFill className="me-2" style ={{color:"Green"}}/> Green
                                    </label>
                                </div>

                                <div className="form-check ps-">
                                    <input className="form-check-input me-4" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" for="flexCheckDefault">
                                      <CircleFill className="me-2" style ={{color:"orange"}}/> Orange
                                    </label>
                                </div>

                                <div className="form-check ps-">
                                    <input className="form-check-input me-4" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" for="flexCheckDefault">
                                      <CircleFill className="me-2" style ={{color:"brown"}}/> Brown
                                    </label>
                                </div>

                                <div className="form-check ps-">
                                    <input className="form-check-input me-4" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" for="flexCheckDefault">
                                      <CircleFill className="me-2" style ={{color:"#000080"}}/> Navy Blue
                                    </label>
                                </div>

                                <div className="form-check ps-">
                                    <input className="form-check-input me-4" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" for="flexCheckDefault">
                                      <CircleFill className="me-2" style ={{color:"grey"}}/> Grey
                                    </label>
                                </div>
                                
                                <div className="form-check ps-">
                                    <input className="form-check-input me-4" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" for="flexCheckDefault">
                                      <CircleFill className="me-2" style ={{color:"purple"}}/> Purple
                                    </label>
                                </div>
                                

                            </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                Brands
                            </button>
                            </h2>
                            <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                            <div className="accordion-body ps-4">

                                <div className="form-check ps-">
                                    <input className="form-check-input me-4" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" for="flexCheckDefault">
                                        Baggit
                                    </label>
                                </div>

                                <div className="form-check ps-">
                                    <input className="form-check-input me-4" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" for="flexCheckDefault">
                                        Puma
                                    </label>
                                </div>

                                <div className="form-check ps-">
                                    <input className="form-check-input me-4" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" for="flexCheckDefault">
                                        Roadster
                                    </label>
                                </div>

                                <div className="form-check ps-">
                                    <input className="form-check-input me-4" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" for="flexCheckDefault">
                                        Peter England
                                    </label>
                                </div>

                                <div className="form-check ps-">
                                    <input className="form-check-input me-4" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" for="flexCheckDefault">
                                        Tommy Hilfiger
                                    </label>
                                </div>

                                <div className="form-check ps-">
                                    <input className="form-check-input me-4" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" for="flexCheckDefault">
                                        Adidas
                                    </label>
                                </div>

                                <div className="form-check ps-">
                                    <input className="form-check-input me-4" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" for="flexCheckDefault">
                                        HRX
                                    </label>
                                </div>

                                <div className="form-check ps-">
                                    <input className="form-check-input me-4" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" for="flexCheckDefault">
                                        Fastrack
                                    </label>
                                </div>

                            </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="panelsStayOpen-headingFour">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                                Price
                            </button>
                            </h2>
                            <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFour">
                            <div className="accordion-body ps-4">
                            
                                <div className="form-check ps-">
                                    <input className="form-check-input me-4" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" for="flexCheckDefault">
                                        100-2000
                                    </label>
                                </div>

                                <div className="form-check ps-">
                                    <input className="form-check-input me-4" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" for="flexCheckDefault">
                                        2001-7000
                                    </label>
                                </div>

                                <div className="form-check ps-">
                                    <input className="form-check-input me-4" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" for="flexCheckDefault">
                                        7001-20000
                                    </label>
                                </div>

                                <div className="form-check ps-">
                                    <input className="form-check-input me-4" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" for="flexCheckDefault">
                                        20000-50000
                                    </label>
                                </div>

                            </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="panelsStayOpen-headingFive">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseFive">
                                Size
                            </button>
                            </h2>
                            <div id="panelsStayOpen-collapseFive" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFive">
                            <div className="accordion-body ps-4">
                                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="panelsStayOpen-headingSix">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSix" aria-expanded="false" aria-controls="panelsStayOpen-collapseSix">
                                Fabric
                            </button>
                            </h2>
                            <div id="panelsStayOpen-collapseSix" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingSix">
                            <div className="accordion-body ps-4">
                                <div className="form-check ps-">
                                    <input className="form-check-input me-4" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" for="flexCheckDefault">
                                        Cotton
                                    </label>
                                </div>

                                <div className="form-check ps-">
                                    <input className="form-check-input me-4" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" for="flexCheckDefault">
                                        Polyester
                                    </label>
                                </div>

                                <div className="form-check ps-">
                                    <input className="form-check-input me-4" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" for="flexCheckDefault">
                                        Wool
                                    </label>
                                </div>

                                <div className="form-check ps-">
                                    <input className="form-check-input me-4" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" for="flexCheckDefault">
                                        Spandex
                                    </label>
                                </div>

                                <div className="form-check ps-">
                                    <input className="form-check-input me-4" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" for="flexCheckDefault">
                                        Elastane
                                    </label>
                                </div>

                                <div className="form-check ps-">
                                    <input className="form-check-input me-4" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" for="flexCheckDefault">
                                        Viscous
                                    </label>
                                </div>

                                
                            </div>
                            </div>
                        </div>

                        </div>
                    </div>
                </div>
                
                <div className = "col-md-9">
                    <div className="d-flex justify-content-end pe-5">
                        <div className="dropdown">
                            <button className="btn dropdown-toggle btn-outline-secondary " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Sort by
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" href="#">Price: High to Low</a></li>
                                <li><a className="dropdown-item" href="#">Price: Low to High</a></li>
                                <li><a className="dropdown-item" href="#">Customer Ratings</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className ="row mt-3">
                        <div className="col">
                            <div className="card">
                                <img src= "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10604484/2019/9/13/6ab71496-74d6-4258-9310-a34c75f7be441568374869936-SASSAFRAS-Women-Jeans-2881568374868311-1.jpg" className="card-img-top" height="280px" width="210px" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example.</p>
                                    <p>price</p>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card">
                                <img src= "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10604484/2019/9/13/6ab71496-74d6-4258-9310-a34c75f7be441568374869936-SASSAFRAS-Women-Jeans-2881568374868311-1.jpg" className="card-img-top" height="280px" width="210px" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example.</p>
                                    <p>price</p>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card">
                                <img src= "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10604484/2019/9/13/6ab71496-74d6-4258-9310-a34c75f7be441568374869936-SASSAFRAS-Women-Jeans-2881568374868311-1.jpg" className="card-img-top" height="280px" width="210px" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example.</p>
                                    <p>price</p>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card">
                                <img src= "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10604484/2019/9/13/6ab71496-74d6-4258-9310-a34c75f7be441568374869936-SASSAFRAS-Women-Jeans-2881568374868311-1.jpg" className="card-img-top" height="280px" width="210px" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example.</p>
                                    <p>price</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
                
        </div>
    
    )
}

export default Products