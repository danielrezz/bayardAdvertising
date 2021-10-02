let validateUser = () => {
  let username = $("#username");

  if (!$(username).val()) {
    $(username).addClass("is-invalid");
    return false;
  } else {
    $(username).removeClass("is-invalid");
    $(username).addClass("is-valid");
    return true;
  }
};

let validateIndustry = () => {
  let industry = $("#industry");

  if (!$(industry).val()) {
    $(industry).addClass("is-invalid");
    return false;
  } else {
    $(industry).removeClass("is-invalid");
    $(industry).addClass("is-valid");
    return true;
  }
};

function validate(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function validateEmail() {
  let email = $("#emailInput").val();

  if (!validate(email)) {
    $("#emailInput").addClass("is-invalid");
    return false;
  } else {
    $("#emailInput").removeClass("is-invalid");
    $("#emailInput").addClass("is-valid");
    return true;
  }
}

$("#submitBtn").on("click", function (event) {
  event.preventDefault();
  if (!validateUser() || !validateEmail() || !validateIndustry()) {
    return;
  } else {
    let newUser = {
      name: $("#username").val().trim(),
      email: $("#emailInput").val().trim(),
      phone: $("#phoneNumber").val().trim(),
      industry: $("#industry").val().trim(),
    };

    $.post("/api/new", newUser).then(function () {
      console.log("new user added!");
      $("#alertBox").show();
      setTimeout(function () {
        $("#alertBox").hide(1000);
      }, 5000);
    });

    $("#username").val("").removeClass("is-valid");
    $("#emailInput").val("").removeClass("is-valid");
    $("#phoneNumber").val("").removeClass("is-valid");
    $("#industry").val("").removeClass("is-valid");
  }
});
