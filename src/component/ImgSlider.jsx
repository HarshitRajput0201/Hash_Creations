import sliderImgData from '../data/SliderImgData.js';
import '../App.css';


export default function ImgSlider() {
    return (
        <div className="wrapper flex items-center relative h-[230px] overflow-hidden 2xl:h-[240px] lg:h-[200px] xxs:h-[150px]">
            {
              sliderImgData.map((image, index) => (
                  <div className={`item-${index+1} item absolute flex justify-center items-center h-[220px] 2xl:h-[230px] lg:h-[180px] xxs:h-[150px]`} key={index}>
                    <img className='rounded-3xl border-4 border-border w-full h-full xxs:rounded-xl' key={index} src={image.url} alt={image.alt} />
                  </div>
              ))
            }
        </div>
    )
}



