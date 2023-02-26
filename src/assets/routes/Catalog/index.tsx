import CardCar from '../../../components/CardCar';
import CardComent from '../../../components/CardComent';
import Footer from '../../../components/Footer';
import Header from '../../../components/Header';
import './styles.css'

export default function Catalog() {

    return (

        <>
            <Header />

            <main className='ds-catalog-main '>
                <section id='ds-catalog-section' className=''>

                    <div className='ds-catalog-cards'>
                        <h3>Venha nos visitar</h3>

                        <div className='ct-catalog-cards-container'>
                            <CardCar />
                            <CardCar />
                        </div>
                    </div>

                        <div className='ds-coment-cards'>
                            <h3>O que estão dizendo</h3>

                            <div className='ct-coments-cards-container'>
                                <CardComent />
                                <CardComent />
                                <CardComent />
                            </div>
                        </div>
                </section>
            </main>
            <Footer/>
        </>

    );
}