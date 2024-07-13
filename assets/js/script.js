function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
  }
  
  $(document).ready(function () {
    $('.copy-button').on('click', function () {
      var codeId = $(this).data('code');
      copyToClipboard(codeId);
    });
  });
  