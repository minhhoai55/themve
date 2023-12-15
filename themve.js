$(document).ready(function () {
    $('#addFlightForm').submit(function (event) {
        event.preventDefault();

        const noiDi = $('#from').val();
        const to = $('#to').val();
        const departureDate = $('#departureDate').val();
        const airline = $('#airline').val();
        const price = $('#price').val();

        $.ajax({
            url: 'https://657b3de2394ca9e4af140ab0.mockapi.io/api/vebays',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
                noidi: noiDi,
                noiden: to,
                ngaydi: departureDate,
                hang: airline,
                gia: price
            }),
            success: function (response) {
                Swal.fire({
                    icon: 'success',
                    title: 'Thành công!',
                    text: 'Vé máy bay đã được thêm thành công.',
                    onClose: () => {
                        window.location.reload();
                    }
                });
            },
            error: function (error) {
                console.error('Lỗi khi gửi dữ liệu đến API:', error);
            }
        });
    });
});