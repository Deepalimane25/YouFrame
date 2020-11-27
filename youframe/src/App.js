import React, { Component } from 'react';
import './App.css';
import NavBar from "./Component/NavBar";
import Footer from "./Component/Footer";
import UploadButton from "./Component/UploadButton";
// import ImageGrid from "./Component/ImageGrid";

export class App extends Component {
  state={
    profileImg:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
    profileImg1:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
    profileImg2:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'

  }
  imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () =>{
      if(reader.readyState === 2){
        this.setState({profileImg: reader.result})
        this.setState({profileImg1: reader.result})
        this.setState({profileImg2: reader.result})
      }
    }
    reader.readAsDataURL(e.target.files[0])
  };
	render() {
    const { profileImg} = this.state
    const { profileImg1} = this.state
    const { profileImg2} = this.state

		return (
      <div>
      
      {/* <div className="label" >
          <label className="image-upload" htmlFor="input">
          <img></img>
						<i>Upload</i>
					</label>
          </div> */}
        
			{/* // <div className="page">

			// 	<div className="container">
			// 		<div className="img-holder">
			// 			<img src={profileImg} alt="" id="img" className="img" />
			// 		</div>
			// 		<input type="file" accept="image/*" name="image-upload" id="input" onChange={this.imageHandler} />
			// 	</div>
      //   <div className="container">
			// 		<div className="img-holder">
			// 			<img src={profileImg1} alt="" id="img" className="img" />
			// 		</div>
			// 		<input type="file" accept="image/*" name="image-upload" id="input" onChange={this.imageHandler} />
			// 	</div>
      //   <div className="container">
			// 		<div className="img-holder">
			// 			<img src={profileImg2} alt="" id="img" className="img" />
			// 		</div>
			// 		<input type="file" accept="image/*" name="image-upload" id="input" onChange={this.imageHandler} />
			// 	</div>
			// </div>
      // </div> */}
      <div className="App">
      <NavBar />
      {/* <ToastContainer /> */}
      <main className="app-container">
        <UploadButton />
        {/* <ImageGrid items={images} /> */}
        <div className="page">
        <div className="container">
			 		<div className="img-holder">
						<img src={profileImg} alt="" id="img" className="img" />
			 		</div>
			 		<input type="file" accept="image/*" name="image-upload" id="input" onChange={this.imageHandler} />
			 	</div>
       <div className="container">
			 		<div className="img-holder">
			 			<img src={profileImg1} alt="" id="img" className="img" />
			 		</div>
			 		<input type="file" accept="image/*" name="image-upload" id="input" onChange={this.imageHandler} />
			 	</div>
         <div className="container">
					<div className="img-holder">
			 			<img src={profileImg2} alt="" id="img" className="img" />
			 		</div>
			 		<input type="file" accept="image/*" name="image-upload" id="input" onChange={this.imageHandler} />
			 	</div>
         </div>
      </main>
      <Footer />
    </div>
    </div>
		);
	}
}

export default App;