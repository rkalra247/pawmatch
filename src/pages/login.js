import Link from "next/link";
import styles from "../styles/Login.module.css";

export default function Login() {
  return (
    <>
      <div className="container-fluid">
        <div className={`row ${styles.main_content} bg-success text-center`}>
          <div className={`col-md-4 text-center ${styles.company_info}`}>
            <span className="company_logo">
              <h2>
                <span className="fa fa-android"></span>
              </h2>
            </span>
            <h4 className="company_title">PawMatch</h4>
          </div>
          <div className={`col-md-8 col-xs-12 col-sm-12 ${styles.login_form}`}>
            <div className="container-fluid">
              <div className="row">
                <h2 className={styles.form_title}>Login</h2>
              </div>
              <div className="row">
                <form control="" className={`form-group ${styles.form}`}>
                  <div className="row">
                    <input
                      type="text"
                      name="username"
                      id="username"
                      className={styles.form_input}
                      placeholder="Username"
                    ></input>
                  </div>
                  <div className="row">
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className={styles.form_input}
                      placeholder="Password"
                    ></input>
                  </div>
                  <div className="row">
                    <input
                      type="submit"
                      value="Submit"
                      className={styles.btn}
                    ></input>
                  </div>
                </form>
              </div>
              <div className="row">
                <p>Don't have an account?</p>
                <p>
                  <Link href="/signup">Register Here</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
