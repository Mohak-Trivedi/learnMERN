function download(url, cb) {
  console.log(`downloading from ${url}`);

  setTimeout(function f() {
    let data = "some content";

    console.log("download completed");
    cb?.(data);
  }, 2000);
}

function writeFile(data, file, cb) {
  console.log(`Writing data to file ${file}`);

  setTimeout(function g() {
    console.log("write done");

    let status = "success";
    cb?.(status);
  }, 3000);
}

function uploadFile(file, server, cb) {
  console.log(`Uploading ${file} file to ${server} server.`);

  setTimeout(function h() {
    console.log("Upload done");

    let status = "success";
    cb?.(status);
  }, 2000);
}

const process = function () {
  download("http://fgh.com", function (data) {
    writeFile(data, "a.txt", function (status) {
      if (status === "success") {
        uploadFile("a.txt", "http://abc.com", function (status) {
          if (status === "success") {
            console.log("done");
          }
        });
      }
    });
  });
};
process();
