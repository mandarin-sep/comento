import React, { useState } from "react";
import { Button, InputAdornment, TextField } from "@mui/material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import KeyIcon from "@mui/icons-material/Key";
import styles from "../assets/Login.module.css";
import { loginAPI } from "../apis/user_api";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userid, setUserid] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [failMsg, setFailMsg] = useState("");
  const navigate = useNavigate();

  const loginClick = () => {
    //    TODO : 로그인 코드
    const loginRes = loginAPI(userid, password);

    loginRes.then((res) => {
      setToken(res.token.accessToken);
    });

    if (token === "") {
      setFailMsg("뭔가 문제가..?");
      return;
    }

    const storgeItem = {
      token: token,
      email: userid,
      password: password,
      name: "도영",
    };
    sessionStorage.setItem("user", JSON.stringify(storgeItem));
    navigate("/");
  };

  return (
    <div className={`${styles.login}`}>
      <div className={styles.login_wrapper}>
        <div className={styles.login_card}>
          <form>
            <div className={styles.input_form}>
              <p className={styles.label}>이메일</p>
              <TextField
                name="username"
                type="text"
                className={styles.input}
                sx={{ "& .MuiInputBase-adornedStart": { paddingLeft: "0" } }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment
                      position="start"
                      sx={{
                        maxHeight: "54px",
                        height: "100%",
                        backgroundColor: "#F0F2F6",
                        padding: "12px",
                      }}
                    >
                      <PersonOutlineOutlinedIcon />
                    </InputAdornment>
                  ),
                }}
                onChange={(e) => setUserid(e.target.value)}
              />
            </div>
            <div className={styles.input_form}>
              <p className={styles.label}>비밀번호</p>
              <TextField
                className={styles.input}
                name="password"
                type="password"
                sx={{ "& .MuiInputBase-adornedStart": { paddingLeft: "0" } }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment
                      position="start"
                      sx={{
                        maxHeight: "54px",
                        height: "100%",
                        backgroundColor: "#F0F2F6",
                        padding: "12px",
                      }}
                    >
                      <KeyIcon />
                    </InputAdornment>
                  ),
                }}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className={styles.fail_msg}>{failMsg}</div>
            <Button
              id={styles.login_btn}
              variant="contained"
              onClick={loginClick}
            >
              로그인
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
