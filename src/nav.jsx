const Nav = () =>
{
  return(
    <div className="base-nav">
      <nav>
        <img className="logo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAI8AAAB8CAMAAABnuxMWAAAAZlBMVEX////+/v5CQkIAAAAzMzMrKyuCgoL7+/vW1tby8vKjo6NkZGSrq6sMDAympqYwMDDr6+uxsbE4ODhJSUlubm7l5eWTk5N6enomJia3t7daWlrDw8PNzc2ampoZGRkfHx9RUVGLi4vj1nDkAAACiElEQVR4nO2aa4+qMBCGpy044o3CIlfX1f//J09bBOW4ETZrm5yT94lGHSfhyTDAl5cIAAAAAACA/w3xho63IVgIEq8wDUz9ZxAd817QZxsX9L0B1ut5tLHhEKdNnAq1hO1p0Rx/a0Pd17743IwcNoc7Y23zWZy/Ot9rbZf1KOPssXQ86hvmy+M8srM8+tUx6ymoVA311w0zk75MztEluYtSo0rvPkztPuF+L+wV1Kkq2x2ynWGzO6xUd/dhVq1nH6sgYxouYzOfk2qrVTXQqtODO9XS7z7b2xzLnG6XsfnJXH4MXMyrvC2wcJsspf/rnWVEk/scD1i7aW8kfdsI58NVHg+kqX0PDNW6rgumPIhPTkmUbr+hePwRpwnlue/7ofVJKYmvc220ihNKve+P9YmNz8ods3+Ysxj22z6vXM1sVe8TYj7R6PMK6xPBBz7wgQ984AMf+MAHPvCBD3zgAx/4wAc+8IEPfOADH/jABz7w+blP7Xxe5H9IBJ/PyzYOOJ98mM/LxqA+s/Mhuob0Sbez8ahtGnB/crWfQ+UJ5YHmw50L2Dj6rE3WNM1hd6/usqwTgfIS6fMq66zMnrJQItB8apdA7GMIfU3nSimpXVzpoZXiD/95Npe3ueUibjmbpDg3SaOKxPi4mvtHkPd9HvJIYlIjHa1MvYq0mOQxBUnP+2OfBDZPMo0Vsk4rc6IKOfUxPd7zJNM82+DIV1WuS3V1Z/H+R4A82zTvN9Z0a6N+T/vsP+/3TR6yr6+b9VNztveeh7SHpu48yYv2AdExKho0L9obLczTtif6O3Dny2hR3pgoTNzYHmVJHpuZQuTDx6fFbF79KR/pT2lJh1jSBwAAAAAAwL/EH0FmMK4WLBWZAAAAAElFTkSuQmCC"  />
     
      <div className="name"><h1 className="nav-h1">THE GADGET STORE</h1></div>
      
      <ul >
      <li ><button className="nav-button">SEARCH <img width="20" height="20" src="https://img.icons8.com/pastel-glyph/64/search--v2.png" alt="search--v2"/></button></li>
      <li ><button className="nav-button">ACCOUNT <img width="20" height="20" src="https://img.icons8.com/ios/50/guest-male.png" alt="guest-male"/></button></li>
      <li ><button className="nav-button">CART <img width="20" height="20" src="https://img.icons8.com/ios/50/shopping-cart--v1.png" alt="shopping-cart--v1"/></button></li>
     
      </ul>
      </nav>

      
     
      

    </div>
  );
};

export default Nav;

