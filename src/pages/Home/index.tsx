import { CardContent, HomeCard, HomeContainer, HomeContent, ImageLogo } from './styles'
import carrinho from '../../assets/carrinho.svg';
import time from '../../assets/time.svg';
import box from '../../assets/box.svg';
import coffe from '../../assets/coffe.svg';
import coffeDelivery from '../../assets/coffeDellivery.png';


export function Home() {
    return (
        <HomeContainer>
            <HomeContent>
                <h1>Encontre o café Perfeito para qualquer hora do dia</h1>
                <strong>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</strong>
            
            <CardContent>
                <HomeCard>
                    <img src={carrinho} />
                    <span>Compra simples e segura</span>
                </HomeCard>
                <HomeCard>
                    <img src={time} />
                    <span>Entrega rápida e rastreada</span>
                </HomeCard>
                <HomeCard>
                    <img src={box} />
                    <span>Embalagem mantém o café intacto</span>
                </HomeCard>
                <HomeCard>
                    <img src={coffe} />
                    <span>O café chega fresquinho até você</span>
                </HomeCard>
            </CardContent>
            </HomeContent>
            <ImageLogo>
                <img src={coffeDelivery} alt="logo" />
            </ImageLogo>
        </HomeContainer>
    )
}