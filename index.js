// Import stylesheets
import "./style.css";
import liff from "@line/liff";
import $ from "jquery";

main();
async function main() {
  $("#shared_btn").hide();
  $("#login_btn").hide();
  $("#logout_btn").hide();
  await liff.init({ liffId: "1655316060-R8aeZaYE" });
  liff.ready.then(async () => {
    if (!liff.isLoggedIn()) {
      liff.login({ redirectUri: window.location });
    } else {
      let url = new URL(window.location);
      let params = url.searchParams;
      let is_shared = params.get("is_shared");
      if (is_shared) {
        shared();
      } else {
        if (liff.isInClient()) {
          $("#shared_btn").show();
          $("#spinner").hide();
        } else {
          $("#shared_btn").show();
          $("#logout_btn").show();
          $("#spinner").hide();
        }
      }
    }
  });
}

window.$ = $;