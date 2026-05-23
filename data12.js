const data12 = [
    {
        id: "cn12-bai-1",
        title: "Bài 1: Giới thiệu tổng quan về kĩ thuật điện",
        blocks: [
            { type: "definition", title: "Khái niệm", text: "Kĩ thuật điện là ngành khoa học kĩ thuật nghiên cứu ứng dụng năng lượng điện trường và từ trường vào các lĩnh vực sản xuất và đời sống xã hội." },
            { type: "text", text: "<strong>1. Vai trò của kĩ thuật điện:</strong> Cung cấp năng lượng cho các ngành công nghiệp chế tạo, nông nghiệp CNC, giao thông vận tải thông minh (xe điện) và nâng cao tiện nghi sinh hoạt." },
            { type: "text", text: "<strong>2. Triển vọng phát triển:</strong> Phát triển mạnh mẽ hệ thống lưới điện thông minh, tích hợp các nguồn năng lượng sạch (điện mặt trời, điện gió), hướng tới tối ưu và tự động hóa hệ thống phân phối." }
        ]
    },
    {
        id: "cn12-bai-2",
        title: "Bài 2: Ngành nghề trong lĩnh vực kĩ thuật điện",
        blocks: [
            { type: "text", text: "Thị trường lao động ngành kĩ thuật điện rất đa dạng với các nhóm ngành nghề và công việc cốt lõi:" },
            { 
                type: "table", 
                headers: ["Vị trí công việc", "Nhiệm vụ chính yêu cầu"],
                rows: [
                    ["Kĩ sư điện", "Thiết kế sơ đồ, giám sát quá trình vận hành, tối ưu lưới điện."],
                    ["Kĩ thuật viên điện", "Thực hiện bảo trì, sửa chữa máy biến áp, tủ phân phối."],
                    ["Thợ điện dân dụng", "Thi công hệ thống điện tòa nhà, văn phòng, nhà xưởng quy mô nhỏ."]
                ]
            }
        ]
    },
    {
       id: "cn12-bai-3",
        title: "Bài 3: Mạch điện xoay chiều ba pha",
        blocks: [
            // SLIDE 1
            { slide: 1, type: "definition", title: "Mạch điện xoay chiều 3 pha", text: "Bao gồm nguồn điện 3 pha, đường dây truyền tải và tải tiêu thụ 3 pha." },
            
            // SLIDE 2
            { slide: 2, type: "text", text: "<strong>Cách đấu nối hình Sao (Y) và Tam giác (Δ):</strong>" },
            { slide: 2, type: "list", items: [
                "<strong>Nối hình sao (Y):</strong> Dòng điện dây bằng dòng điện pha ($I_d = I_p$), điện áp dây bằng căn 3 lần điện áp pha ($U_d = \\sqrt{3}U_p$).",
                "<strong>Nối hình tam giác (Δ):</strong> Điện áp dây bằng điện áp pha ($U_d = U_p$), dòng điện dây bằng căn 3 lần dòng điện pha ($I_d = \\sqrt{3}I_p$)."
            ]},
            
            // SLIDE 3
            { slide: 3, type: "warning", title: "Cảnh báo an toàn", text: "Cần đấu nối đúng tải theo quy định điện áp định mức để tránh nguy cơ sụt áp hoặc cháy cuộn dây thiết bị." },
            
            // SLIDE 4
            { slide: 4, type: "text", text: "<strong>Ứng dụng thực tế:</strong> Mạch ba pha được sử dụng rộng rãi trong các nhà xưởng công nghiệp, vận hành máy bơm công suất lớn và hệ thống thang máy." },
            
            // SLIDE 5
            { slide: 5, type: "summary", title: "Tóm tắt bài học", text: "Ghi nhớ kỹ 2 công thức biến đổi dòng và áp của mạch hình Sao và mạch hình Tam giác để làm bài tập kiểm tra." }
        ]
    },
    {
        id: "cn12-bai-4",
        title: "Bài 4: Hệ thống điện quốc gia",
        blocks: [
            { type: "definition", title: "Định nghĩa", text: "Hệ thống điện quốc gia là một hệ thống hợp nhất bao gồm các khâu: Sản xuất (Nhà máy điện), Truyền tải (Đường dây cao thế, siêu cao thế), Phân phối và Tiêu thụ trên phạm vi toàn quốc dưới một sự điều độ thống nhất." },
            { type: "text", text: "<strong>Vai trò cốt lõi:</strong> Đảm bảo cung cấp nguồn năng lượng điện an toàn, liên tục, ổn định cho nền kinh tế quốc dân và an ninh quốc phòng quốc gia." }
        ]
    },
    {
        id: "cn12-bai-5",
        title: "Bài 5: Sản xuất điện năng",
        blocks: [
            { type: "text", text: "Điện năng hiện nay được sản xuất từ nhiều nguồn năng lượng thô khác nhau thông qua các mô hình nhà máy cơ bản:" },
            {
                type: "list",
                items: [
                    "<strong>Nhiệt điện:</strong> Đốt nhiên liệu hóa thạch (than, khí đốt) sinh hơi nước làm quay tuabin máy phát.",
                    "<strong>Thủy điện:</strong> Khai thác thế năng dòng nước ở đập cao làm quay cánh tuabin.",
                    "<strong>Năng lượng tái tạo:</strong> Điện gió (turbin gió), điện mặt trời (tấm pin quang điện), năng lượng sinh khối..."
                ]
            }
        ]
    }
];
