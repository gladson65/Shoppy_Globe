import { createContext } from "react";
import { useState } from "react";

const msgContext = createContext({
    msg: false,
    setMsg(i) {
        this.msg = i
    },
})

export default msgContext;