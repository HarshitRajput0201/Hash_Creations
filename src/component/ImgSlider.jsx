// import sliderImgData from '../data/SliderImgData';

// const ImgSlider = () => {


//   return (
//     <div className="flex flex-row overflow-hidden relative w-full">
//       <div className="slider-track flex justify-center items-center gap-4 overflow-hidden">
//         {
//             sliderImgData.map((image, index) => (
//                 <img className='rounded-3xl border-4 border-border max-w-[300px] object-cover' key={index} src={image.url} alt={image.alt} />
//             ))
//         }
//         {
//             sliderImgData.map((image, index) => (
//                 <img className='rounded-3xl border-4 border-border max-w-[300px] object-cover' key={`duplicate-${index}`} src={image.url} alt={image.alt} />
//             ))
//         }
//       </div>
//     </div>
//   )
// }

// export default ImgSlider



import '../App.css';

// import required modules

export default function ImgSlider() {
    return (
            <div className="scroll" style={{ '--time': '20s' }}>
              <div>
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>ReactJS</span>
                <span>Figma</span>
                <span>Photoshop</span>
                <span>Premiere Pro</span>
                <span>Figma</span>
                <span>Angular</span>
                <span>Node JS</span>
              </div>
              <div>
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>ReactJS</span>
                <span>Figma</span>
                <span>Photoshop</span>
                <span>Premiere Pro</span>
                <span>Figma</span>
                <span>Angular</span>
                <span>Node JS</span>
              </div>
            </div>
          );
  }



