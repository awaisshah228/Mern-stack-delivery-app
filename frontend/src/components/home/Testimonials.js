import styled  from 'styled-components'
import TestimonialsSlider from './TestimonialsSlider'
import {SectionTitle} from '../menu/Menu'
import eatingPeople from '../../img/People-Eating-And-Drinking-90673271.jpg'

const StyledTestimonials = styled.section`
width:100vw;
margin-bottom:20px;
`;
const Title=styled(SectionTitle)`
padding-bottom: 0;
`
const TestimonialsWrapper= styled.div`
width:100%;
min-height:360px;
displey:flex;
flex-wrap: wrap;

@media screen and (min-width:960px){

  & > * {
    width:50%;
  }
}
  



`; 
const TestimonialsImage = styled.div`
overflow:hidden;
height:360px;

`; 
const Img = styled.img`
width:100%;
min-height:100%;
`;
 export default function Testimonials (){
 
return(
 <StyledTestimonials>
     <Title>Clientes Felices</Title>
     <TestimonialsWrapper className="flex">
 
  <TestimonialsImage>
<Img src={eatingPeople} alt="happy-clients"></Img>
</TestimonialsImage>
  <TestimonialsSlider/>

</TestimonialsWrapper>
  </StyledTestimonials>

);
 }