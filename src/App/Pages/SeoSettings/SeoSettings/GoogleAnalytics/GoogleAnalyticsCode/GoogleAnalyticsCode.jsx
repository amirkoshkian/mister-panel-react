////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Imports
import React from "react";
////////////////////////////////////////////////////////////////////////////////////////////////////// End Section Imports

////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Class
export default class GoogleAnalyticsCode extends React.Component {
  render() {
    return (
      <section className="p-3">
        <section className="row">
          <section className="row d-flex align-items-center justify-content-center">
            <section className="col-xl-12 p-2">
              <section className="bg-t-o b-r-10">
                <section className="col-12 p-3 text-center">
                  <span>تجزیه و تحلیل ترافیک گوگل</span>
                </section>

                <form className="col-12 p-3 text-center" method="POST">
                  <span>تجزیه و تحلیل ترافیک گوگل (Google Analytics)</span>

                  <section className="pt-5 d-flex align-items-center justify-content-center">
                    <section className="col-md-6">
                      <textarea
                        name="admin_google_analytics"
                        className="input-content-users p-2"
                        required={true}
                        rows="9"
                        defaultValue={`<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-90614514-2"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-90614514-2');
</script>`}
                        dir="ltr"
                      ></textarea>
                    </section>
                  </section>

                  <section className="pt-5 d-flex align-items-center justify-content-center">
                    <section className="col-md-6">
                      <input
                        type="submit"
                        className="input-content-users p-2 bg-success"
                        name="SendGoogleAnalytics"
                        value="ارسال"
                      />
                    </section>
                  </section>
                </form>
              </section>
            </section>
          </section>
        </section>
      </section>
    );
  }
}
////////////////////////////////////////////////////////////////////////////////////////////////////// End Section Class
