import React from "react";
// import PropTypes from "prop-types";


// class ProductDetail extends React.Component{
// constructor(props){
// super();
// this.state = {
// visible: true,
// };
// }
// render() {
// var ProductDivs = "";
//
// if(this.state.visible){
// ProductDivs = this.props.state.map(function(prods, index){
// return
//   <div className="grid_1_of_5 images_1_of_5" key={index}>
//     <img src={prods.imgUrl} alt=""/>
//     <h3>{prods.name} </h3>
//     <p>{prods.description}</p>
//     <h4>{prods.price}</h4>
//     <div className="button"><span><a href="singlepage.html">Read More</a></span></div>
//   </div>
// });
// }
// else{
// ProductDivs = "";
// }
//
// return (
//
// <div>
// {ProductDivs}
// </div>)
// }
// }


function ProductDetail(props){
  let prods = props.prod

    return(
      <div className="grid_1_of_5 images_1_of_5" >
                 <img src={prods.imgUrl} alt=""/>
                 <h3>{prods.name} </h3>
                 <p>{prods.description}</p>
                 <h4>{prods.price}</h4>
                   <div className="button"><span><a href="singlepage.html">Read More</a></span></div>
               </div>
    );

}


// class ProductDetail extends React.Component{
//   constructor(props){
//     super();
//
//
//   }
//   render(){
//
//     var productDivs = props.state.map((prods, index)=>{
//       return(
//         <div className="grid_1_of_5 images_1_of_5" key={index}>
//            <img src={prods.imgUrl} alt=""/>
//            <h3>{prods.name} </h3>
//            <p>{prods.description}</p>
//            <h4>{prods.price}</h4>
//              <div className="button"><span><a href="singlepage.html">Read More</a></span></div>
//          </div>
//       );
//     });
// return(
//   {productDivs}
// );
//   }
// }

// ProductDetail.propTypes = {
//   product:PropTypes.array.isRequired
// };

export default ProductDetail;
