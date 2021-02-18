Mock.mock("/api/buyer",{
    'name':'@NAME',
    'color':'@COLOR',
    'email':'@EMAIL',
});

$.ajax({
    url: "/api/buyer",
    type: "GET",
    data: "",
    success: function (data) {
        console.log("+++++++++++++++===");
        console.log(data);
    },
    error: function (error) {
        console.log("======================");
        console.log(error);
    }
});