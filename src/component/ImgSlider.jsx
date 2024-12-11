import sliderImgData from '../data/SliderImgData.js';
import '../App.css';


export default function ImgSlider() {
    return (
        <div className="wrapper flex items-center relative h-[230px] overflow-hidden">
            {
              sliderImgData.map((image, index) => (
                  <div className={`item-${index+1} item absolute flex justify-center items-center h-[220px]`} key={index}>
                    <img className='rounded-3xl border-4 border-border w-[320px] h-[220px]' key={index} src={image.url} alt={image.alt} />
                  </div>
              ))
            }
        </div>
    )
}



