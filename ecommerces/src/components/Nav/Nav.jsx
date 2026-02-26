import React from 'react';
import '../Nav/Nav.css'
import '../../assets/style/global.css'

const Nav = () => {
    return (

        <section className='nav'>
            <div className='container'>

                <div className="flex">
                    <strong>Browse Category</strong>

                    <nav>
                        <ul className='flex'>
                            <li>Home</li>
                            <li>Shop</li>
                            <li>Collection</li>
                            <li>Blog</li>
                            <li>Pages</li>
                        </ul>
                    </nav>
                </div>

            </div>

        </section>
    );
}

export default Nav;
