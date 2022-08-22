import { Component } from "react";
import {Home,Aboute,ContactUs} from '../pages'
export default function Router({page}) {
      switch (page) {
        case "home":
          return <Home/>
          case "about":
            return <Aboute/>
            case "contactus":
              return <ContactUs/>
        default:
          break;
}
}