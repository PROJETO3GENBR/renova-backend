
import { Button } from '@material-ui/core'
import React from 'react'
import '../Produto/Produto.css'



function Produto() {
  return (
    <>
      <main id='main_produto'>
    
          <div id='product_cartao_buy'>
            <h1 id='product_name_buy'> Produto Placeholder </h1>
            <img id='product_image_buy' src='https://www.amityinternational.com/wp-content/uploads/2018/12/amity-place-holder.jpg' alt='' title='' />
            <div id='product_button_price'>
            <Button id='product_button_buy' variant="contained" size='medium' color="secondary">
              comprar
            </Button>
            <p>R$ 48,00</p>
            </div>
          </div>


        <div id='sub_product_buy'>
          <div id='sub_product_desc'> Descrição do Produto</div>
          <div id='sub_product_desc_text'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, commodi repellat rem sit est at corrupti exercitationem ullam architecto veniam consequuntur voluptas, temporibus officia optio totam alias asperiores odio vitae.
            </p>
          </div>
        </div>

      </main>
    </>
  )
}
export { Produto }
