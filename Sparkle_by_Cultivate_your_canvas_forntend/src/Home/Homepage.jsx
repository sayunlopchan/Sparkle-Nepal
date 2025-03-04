import React from 'react'


// Home Features
import Slider from '../Home/Features/HomeSlider/Slider'
import GridGallery_1 from '../Home/Features/Gallery_grid/Grid_Gallery_1'
import ChairWomenMessage from '../Home/Features/introduction/ChairWomenMessage'
import Counter_Ui from '../components/Counter/Counter_Ui'
import Introduction from '../Home/Features/introduction/Introduction'
import GridGallery_2 from '../Home/Features/Gallery_grid/Grid_Gallery_2'
import WhyChooseUs from '../Home/Features/WhyChooseUs'
import FAQ from '../Home/Features/FAQ/FAQ'
import HomePageSkeleton from '../components/skeleton/HomePageSkeleton'







const Homepage = () => {

  return (
    <div className='space-y-10'>
      <Slider />
      <GridGallery_1 />
      <Introduction />
      <div className='overflow-hidden'>
        <ChairWomenMessage />
      </div>
      <Counter_Ui />
      <GridGallery_2 />
      <WhyChooseUs />
      <FAQ />

    </div >
  )
}

export default Homepage