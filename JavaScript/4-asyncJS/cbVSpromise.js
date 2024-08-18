/**
 * Implement a set of dummy functions which can mimic the behavior of the following functions:
 * 1. download -> This function should mimic downloading of somecontent from a url
 * 2. writeFile -> This function should mimic writing of some content to a file
 * 3. upload -> This function should mimic uploading the file to a server
 *
 * Now after you've implemented these functions, try to use them in a scenario where we first
 * download a file, then write it to a disk and then upload it to a server.
 */

function download(url, cb) {
  console.log(`Starting to download from ${url}`);

  setTimeout(function () {
    let data = "Some downloaded content";
    console.log("download completed");
    cb?.(data);
  }, 3000);
}

function writeFile(content, file, cb) {
  console.log(`Starting to write content ${content} to ${file} file.`);

  setTimeout(function () {
    console.log("write operation completed");
    let writeStatus = "success";
    cb?.(writeStatus);
  }, 2000);
}

function uploadFile(file, server, cb) {
  console.log(`Starting to upload ${file} file to ${server} server.`);

  setTimeout(function () {
    console.log("data upload completed");
    let uploadStatus = "success";
    cb?.(uploadStatus);
  }, 3000);
}

// download then write then upload
function process() {
  download("http://abc.com", function handleDownload(data) {
    writeFile(data, "a.txt", function handleWrite(status) {
      if (status === "success") {
        uploadFile("a.txt", "http://fgh.com", function handleUpload(status) {
          if (status === "success") {
            console.log("all done");
          }
        });
      }
    });
  });
}
process();

// download, write and upload in parallel for different purposes
download("http://fgh.com");
writeFile("My content", "v.txt");
uploadFile("j.txt", "myServer");
