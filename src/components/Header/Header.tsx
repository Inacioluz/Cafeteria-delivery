import { HeaderContainer, NavHeader } from './styles'

import logoCafeteria from '../../assets/Logo.svg'
import cestaShopping from '../../assets/cestaShopping.svg'
import IconLocale from '../../assets/IconLocale.svg'

export function Header() {
    return (
        <HeaderContainer>
            <img src={logoCafeteria} alt="Logo do Coffe Delivey" />

            <NavHeader>
                <span>
                    <img src={IconLocale} alt="icone de localicação" />
                    São Paulo - SP
                </span>
                <img src={cestaShopping} alt="imagem do carrinho de compras" />
            </NavHeader>
        </HeaderContainer>

    )
}