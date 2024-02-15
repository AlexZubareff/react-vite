import classes from './Slide.module.css';

export default function Slide ({slide}) {
    console.log(`../../img/sliderimg/` + `${slide.image}`);
    return (
    <section >
        <img className={classes['slide-img']} src={`../../../src/img/sliderimg/${slide.image}`} />

        
        <div>
            <h5>{slide.title}</h5>
        </div>

    </section>
    )
}