import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../Catslider/style.css';
const Index = () => {
  const navigate = useNavigate();

  return (
    
    <div className='catSliderSection'>
        <div className='3'>
            <h2 className='hd'>Browse By Health Condition</h2>
            <br></br>
            <div class="category-cards" >
      <div class="grid_item" >
        
        <div class="T">
          <div  class="U">
            <button className='button' onClick={()=> navigate('/diabatic_care')}>
            <div class="V">
              <img src="https://static.vecteezy.com/system/resources/previews/008/048/985/original/diabetes-care-blue-gradient-concept-icon-chronic-disease-treatment-medical-center-service-abstract-idea-thin-line-illustration-isolated-outline-drawing-vector.jpg" sizes="50px" alt="Diabetes Care" width="50" height="50" loading="lazy" fetchpriority="low" class="wb"/>
            </div>
            <div class="W">
              <h3>Diabetes Care</h3>
            </div>
            </button>
          </div>
        </div>
      </div>
      <div class="grid_item">
        <div class="T">
          <div class="U">
            <button className='button' onClick={()=> navigate('/stomach_care')}>
            <div class="V">
              <img src="https://cdn-icons-png.flaticon.com/512/2721/2721136.png" sizes="50px" alt="Diabetes Care" width="50" height="50" loading="lazy" fetchpriority="low" class="wb"/>
            </div>
            <div class="W">
              <h3>Stomach care</h3>
            </div>
            </button>
          </div>
        </div>
      </div>
      <div class="grid_item">
        <div class="T">
          <div class="U">
            <button className='button' onClick={()=> navigate('/cardiac_care')}>
            <div class="V">
              <img src="https://www.creativefabrica.com/wp-content/uploads/2022/11/15/Heart-Care-Icon-Graphics-46729854-1.png" sizes="50px" alt="Diabetes Care" width="50" height="50" loading="lazy" fetchpriority="low" class="wb"/>
            </div>
            <div class="W">
              <h3>Cardiac Care</h3>
            </div>
            </button>
          </div>
        </div>
      </div>
      <div class="grid_item">
        <div class="T">
          <div class="U">
            <button className='button' onClick={()=> navigate('/oral_care')}>
            <div class="V">
              <img src="https://img.freepik.com/premium-vector/children-dental-health-month-teeth-care-icon-oral-dental-hygiene_676179-317.jpg?w=2000" sizes="50px" alt="Diabetes Care" width="50" height="50" loading="lazy" fetchpriority="low" class="wb"/>
            </div>
            <div class="W">
              <h3>Oral Care</h3>
            </div>
            </button>
          </div>
        </div>
      </div>
      <div class="grid_item">
        <div class="T">
          <div class="U">
            <button className='button' onClick={()=> navigate('/Respiratory_care')}>
            <div class="V">
              <img src="https://static.vecteezy.com/system/resources/previews/021/527/438/non_2x/respiratory-care-icon-style-vector.jpg" sizes="50px" alt="Diabetes Care" width="50" height="50" loading="lazy" fetchpriority="low" class="wb"/>
            </div>
            <div class="W">
              <h3>Respiratory Care</h3>
            </div>
            </button>
          </div>
        </div>
      </div>
      <div class="grid_item">
        <div class="T">
          <div class="U">
            <button className='button'onClick={()=> navigate('/painRelief_care')}>
            <div class="V">
              <img src="https://image.shutterstock.com/image-vector/back-pain-treatment-logo-vector-260nw-2156127411.jpg" sizes="50px" alt="Diabetes Care" width="50" height="50" loading="lazy" fetchpriority="low" class="wb"/>
            </div>
            <div class="W">
              <h3>Pain relief</h3>
            </div>
            </button>
          </div>
        </div>
      </div>
      <div class="grid_item">
        <div class="T">
          <div class="U">
            <button className='button'onClick={()=> navigate('/Liver_care')}>
            <div class="V">
              <img src="https://as2.ftcdn.net/v2/jpg/03/04/90/23/1000_F_304902372_BbzwBpT17ttGbcTJgrDTskGRL9YKkgfm.jpg" sizes="50px" alt="Diabetes Care" width="50" height="50" loading="lazy" fetchpriority="low" class="wb"/>
            </div>
            <div class="W">
              <h3>Liver Care</h3>
            </div>
            </button>
          </div>
      
        </div>
      </div>
      <div class="grid_item">
        <div class="T">
          <div class="U">
            <button className='button' onClick={()=> navigate('/immunity')}>
            <div class="V">
              <img src="https://cdn-icons-png.flaticon.com/512/5106/5106339.png" sizes="50px" alt="Diabetes Care" width="50" height="50" loading="lazy" fetchpriority="low" class="wb"/>
            </div>
            <div class="W">
              <h3>Cold & Immunity</h3>
            </div>
            </button>
          </div>
        </div>
      </div>
      
            </div>
        </div>
    </div>
  )
}

export default Index