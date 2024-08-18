/**
 * Implement a set of dummy functions which can mimic the behavior of the following functions:
 * 1. download -> This function should mimic downloading of some content from a url
 * 2. writeFile -> This function should mimic writing of some content to a file
 * 3. upload -> This function should mimic uploading the file to a server
 *
 * Now after you've implemented these functions, try to use them in a scenario where we first
 * download a file, then write it to a disk and then upload it to a server.
 */

// Callback-based approach:

// function download(url, cb) {
//   console.log(`Starting to download from ${url}`);

//   setTimeout(function () {
//     let data = "Some downloaded content";
//     console.log("download completed");
//     cb?.(data);
//   }, 3000);
// }

// function writeFile(content, file, cb) {
//   console.log(`Starting to write content ${content} to ${file} file.`);

//   setTimeout(function () {
//     console.log("write operation completed");
//     let writeStatus = "success";
//     cb?.(writeStatus);
//   }, 2000);
// }

// function uploadFile(file, server, cb) {
//   console.log(`Starting to upload ${file} file to ${server} server.`);

//   setTimeout(function () {
//     console.log("data upload completed");
//     let uploadStatus = "success";
//     cb?.(uploadStatus);
//   }, 3000);
// }

// // download then write then upload
// function process() {
//   download("http://abc.com", function handleDownload(data) {
//     writeFile(data, "a.txt", function handleWrite(status) {
//       if (status === "success") {
//         uploadFile("a.txt", "http://fgh.com", function handleUpload(status) {
//           if (status === "success") {
//             console.log("all done");
//           }
//         });
//       }
//     });
//   });
// }
// process();

// // download, write and upload in parallel for different purposes
// download("http://fgh.com");
// writeFile("My content", "v.txt");
// uploadFile("j.txt", "myServer");

////////////////////////////////////////////////////////////////////////////

// Promise-based approach:
// No need to take callbacks here because Promises have the mechanism of
// pending and fulfillment. Only when the promise gets fulfilled (resolved/rejected)
// the callback passed to .then() gets executed. This .then() returns a brand new
// promise object which is pending initially, and only once its callback function
// returns some value i.e. only when this brand new promise gets resolved, only then
// the callback mentioned in the next chained .then() is executed and so on...
// Due to this, we are sure that only when the promise returned by download() resolves
// the downloadHandler() i.e. the callback mentioned in the .then() will be invoked.
// And hence, we must call writeFile() from the callback of this .then(), so we
// are sure that only after the download is completed, we start with write operation.
// Now, we want the next chained .then() that contains the callback calling uploadFile()
// to execute its callback only when write operation is done. So, we return writeFile()
// from the handleDownload(), so that the then() containing handleDownload() resolves
// only after write operation is done. This way, even uploadFile() is called only after
// the write operation is done.

function download(url) {
  return new Promise(function (res, rej) {
    console.log(`Starting to download data from ${url}.`);

    setTimeout(function () {
      let data = "Some downloaded content";
      console.log("Download Completed");
      res(data);
    }, 2000);
  });
}

function writeFile(content, file) {
  return new Promise(function (res, rej) {
    console.log(`Starting to write ${content} content in ${file} file.`);

    setTimeout(function () {
      console.log("Write operation completed");
      let writeStatus = "success";
      res(writeStatus);
    }, 3000);
  });
}

function uploadFile(file, server) {
  return new Promise(function (res, rej) {
    console.log(`Starting to upload ${file} file to ${server} server.`);

    setTimeout(function () {
      console.log("Upload operation completed");
      const uploadStatus = "success";
      res(uploadStatus);
    }, 2000);
  });
}

// With Promise-chaining syntax:
// download("http://abc.com")
//   .then(function downloadHandle(data) {
//     return writeFile(data, "a.txt");
//   })
//   .then(function handleWrite(status) {
//     if (status === "success") {
//       return uploadFile("a.txt", "http://fgh.com");
//     }
//   })
//   .then(function (status) {
//     if (status === "success") {
//       console.log("All Done!");
//     }
//   })
//   .catch(function (err) {
//     console.log(`${err} error occured`);
//   });

// Without Promise-chaining syntax:
const p1 = download("http://abc.com");
const p2 = p1.then(function downloadHandle(data) {
  return writeFile(data, "a.txt");
});
const p3 = p2.then(function handleWrite(status) {
  if (status === "success") {
    return uploadFile("a.txt", "http://fgh.com");
  }
});
p3.then(function (status) {
  if (status === "success") {
    console.log("All Done!");
  }
});
