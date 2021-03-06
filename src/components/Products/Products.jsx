import React from 'react'
import { Grid } from '@material-ui/core'
import { Home } from '../../components'

import Product from './Product/Product'
import useStyles from './styles'
import './styles.css'

const Products = ({ products, onAddToCart }) => {
    const classes = useStyles()

    return (
        <div>
            <Home />

            <main className={classes.content} id="shop">
                <div className={classes.toolbar} />
                <Grid container justifyContent="center" spacing={4}>
                    {products.map((product) => (
                        <Grid
                            item
                            key={product.id}
                            xs={12}
                            sm={6}
                            md={4}
                            lg={3}
                        >
                            <Product
                                product={product}
                                onAddToCart={onAddToCart}
                            />
                        </Grid>
                    ))}
                </Grid>
            </main>
        </div>
    )
}

export default Products
