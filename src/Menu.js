import logo from '../src/images/extantpowerling logo-01.svg'
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";

const Menu = () => {
    const nav = [
        {
            href: "/features",
            title: "Feature"
        }, {
            href: "/movies",
            title: "Movies"
        }, {
            href: "/contact-us",
            title: "Contact Us"
        },
        {
            href: "/trending",
            title: "Trending"
        }
    ]

    return (
        <Navbar variant="dark" expand="lg" className="bg-primary">
            <Container fluid>
                <Navbar.Brand href="#home">
                    <img src={logo} height={50}/>
                </Navbar.Brand>
                {
                    nav.map((item, index) =>
                        <a href={item.href}
                           key={index}> {item.title}</a>)
                }

                <Navbar.Toggle aria-controls="navbar-dark-example"/>
                <Navbar.Collapse id="navbar-dark-example">
                    <Nav>
                        <NavDropdown
                            id="nav-dropdown-dark-example"
                            title="About Us"
                            className="bg-info"
                        >
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Menu;
