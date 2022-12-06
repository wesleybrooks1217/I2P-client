

function Resources() {

    return (
        <div>
            <p style = {{fontSize: 24, fontWeight: 'bold'}}>Resources</p>

            <div style = {{
                marginTop: 75,
                display: 'flex',
                flexDirection: 'row'
                }}>

                <div>
                    <img src = "https://www.teachervision.com/sites/default/files/inline-images/Icebreakers.jpg"
                    width={250}
                    height={250}/>
                    <p style = {{marginTop: 25, fontSize: 18}}>Kahn Academy</p>
                </div>

                <div style = {{
                    marginLeft: 100
                }}>
                    <img src = "https://olc-wordpress-assets.s3.amazonaws.com/uploads/2018/07/IMPLEMENTING-OPEN-EDUCATIONAL-RESOURCES.jpg" 
                    width={250}
                    height={250}/>
                    <p style = {{marginTop: 25, fontSize: 18}}>Boezman Science</p>
                </div>

                <div style = {{
                    marginLeft: 100
                }}>
                    <img src = "https://i0.wp.com/2.bp.blogspot.com/-ri3YS2flYYE/WU0s921eSoI/AAAAAAAAArs/Os8p6SJG0mA1eQZVH_kfBmMVFNG3REr4QCEwYBhgL/s1600/Edited%2BDU_ReviewsSchoolResources_2017.jpg?ssl=1"
                    width={250}
                    height={250}/>

                    <p style = {{marginTop: 25, fontSize: 18}}>Libre Texts</p>
                </div>
            </div>
        </div>
    );
};

export default Resources;