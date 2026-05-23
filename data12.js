const data12 = [
    // ==========================================
    // BÀI 1: GIỚI THIỆU TỔNG QUAN VỀ KĨ THUẬT ĐIỆN
    // ==========================================
    {
        id: "cn12-bai-1",
        title: "Bài 1: Tổng quan về kĩ thuật điện",
        blocks: [
            // Slide 1: Lý thuyết trọng tâm
            { slide: 1, type: "definition", title: "Khái niệm nền tảng", text: "Kĩ thuật điện nghiên cứu ứng dụng các hiện tượng điện từ để sản xuất, truyền tải, phân phối và sử dụng điện năng." },
            { slide: 1, type: "text", text: "<strong>Vai trò cốt lõi:</strong> Là động lực phát triển cho các ngành sản xuất công nghiệp, nông nghiệp công nghệ cao và nâng cao toàn diện chất lượng đời sống con người." },
            { slide: 1, type: "summary", title: "Đối soát bộ 48 mã đề thi (0601 - 0648)", text: "Nội dung bài chủ yếu cung cấp khái niệm vĩ mô và triển vọng công nghệ. Xuất hiện làm nền tảng lý thuyết cho các câu hỏi vận dụng về ý nghĩa năng lượng điện." },

            // Slide 2: Luyện tập & Vận dụng (SGK)
            { slide: 2, type: "text", text: "<strong>Câu hỏi thảo luận 1 (Vai trò):</strong> Tại sao điện năng được coi là nguồn năng lượng quan trọng trong cuộc sống hằng ngày của chúng ta? Lấy ví dụ minh hoạ?" },
            { slide: 2, type: "summary", title: "Gợi ý đáp án", text: "Điện năng là nguồn năng lượng chính cho sản xuất, giúp tự động hóa dây chuyền và vận hành các thiết bị thiết yếu (chiếu sáng, y tế, viễn thông...)." },

            // Slide 3: Triển vọng công nghệ mới
            { slide: 3, type: "text", text: "<strong>Câu hỏi thảo luận 2 (Triển vọng):</strong> Trình bày một số xu hướng công nghệ mới trong lĩnh vực kĩ thuật điện giúp cải thiện hiệu suất và bảo vệ môi trường?" },
            { slide: 3, type: "summary", title: "Xu hướng phát triển", text: "Tập trung vào 4 trụ cột: Năng lượng tái tạo (điện gió, mặt trời), Lưới điện thông minh (Smart Grid), Vật liệu mới (siêu dẫn) và Hệ sinh thái nhà thông minh." },

            // Slide 4: Trắc nghiệm khách quan
            { slide: 4, type: "text", text: "<strong>Giải quyết hệ thống câu hỏi trắc nghiệm nhiều phương án lựa chọn:</strong>" },
            { slide: 4, type: "text", text: "<strong>Câu 1 (Nhận biết):</strong> Kĩ thuật điện là lĩnh vực kĩ thuật liên quan đến:<br>A. Chỉ nghiên cứu vật liệu xây dựng.<br><strong>B. Sản xuất, truyền tải, phân phối và sử dụng điện năng.</strong><br>C. Chỉ nghiên cứu thuật toán máy tính.<br>D. Chế tạo động cơ đốt trong ô tô." },
            { slide: 4, type: "text", text: "<strong>Câu 2 (Thông hiểu):</strong> Trong sản xuất, kĩ thuật điện đóng vai trò trung tâm trong việc:<br>A. Thay thế hoàn toàn con người trong mọi khâu thủ công.<br><strong>B. Điều khiển và tự động hoá các quy trình sản xuất.</strong><br>C. Chỉ dùng để chiếu sáng nhà xưởng.<br>D. Đo lường diện tích nhà kho." },

            // Slide 5: Trắc nghiệm Đúng/Sai nâng cao
            { slide: 5, type: "text", text: "<strong>Câu 3 (Đánh giá năng lực Đúng/Sai) - Về triển vọng phát triển kĩ thuật điện:</strong>" },
            { slide: 5, type: "list", items: [
                "a) Phát triển năng lượng tái tạo giúp giảm sự phụ thuộc vào nhiên liệu hóa thạch. <strong>(ĐÚNG)</strong>",
                "b) Lưới điện thông minh không có khả năng tự động hóa việc đo lường điện năng. <strong>(SAI)</strong>",
                "c) Việc phát triển các vật liệu siêu dẫn giúp giảm tổn thất năng lượng trên đường dây truyền tải. <strong>(ĐÚNG)</strong>",
                "d) Các phương tiện giao thông chạy bằng điện (xe điện) là xu thế phát triển trong tương lai để bảo vệ môi trường. <strong>(ĐÚNG)</strong>"
            ]}
        ]
    },

    // ==========================================
    // BÀI 2: NGÀNH NGHỀ TRONG LĨNH VỰC KĨ THUẬT ĐIỆN
    // ==========================================
    {
        id: "cn12-bai-2",
        title: "Bài 2: Ngành nghề trong kĩ thuật điện",
        blocks: [
            // Slide 1: Phân loại & Đặc điểm nghề
            { slide: 1, type: "definition", title: "Phân loại 5 nhóm nghề chính", text: "Bao gồm: (1) Thiết kế điện, (2) Sản xuất, chế tạo thiết bị điện, (3) Lắp đặt điện, (4) Vận hành điện, (5) Bảo dưỡng và sửa chữa điện." },
            { slide: 1, type: "table", headers: ["Trình độ đào tạo", "Vị trí việc làm tương ứng"], rows: [
                ["Đại học ngành kĩ thuật điện trở lên", "Kĩ sư điện / Kĩ sư thiết kế"],
                ["Trung cấp hoặc Cao đẳng nghề", "Kĩ thuật viên kĩ thuật điện"],
                ["Sơ cấp nghề kĩ thuật điện", "Thợ điện / Công nhân thi công"]
            ]},

            // Slide 2: Đối soát Đề thi (Dạng 1 & Dạng 2)
            { slide: 2, type: "text", text: "<strong>Câu hỏi trích xuất từ bộ đề thi (0601 – 0648):</strong>" },
            { slide: 2, type: "warning", title: "Dạng 1: Nhận biết ngành nghề", text: "Ngành nghề nào dưới đây thuộc lĩnh vực kĩ thuật điện?<br>A. Kĩ sư xây dựng. | B. Kĩ sư môi trường.<br><strong>C. Kĩ sư điện.</strong> | D. Kĩ sư cơ khí." },
            { slide: 2, type: "warning", title: "Dạng 2: Phân loại công việc cụ thể", text: "Công việc kéo dây điện để kết nối nguồn từ lưới điện hạ áp tới các hộ gia đình thuộc nhóm ngành nghề nào?<br>A. Vận hành điện. | <strong>B. Lắp đặt điện.</strong><br>C. Thiết kế điện. | D. Sản xuất thiết bị điện." },

            // Slide 3: Câu hỏi trắc nghiệm nhiều lựa chọn
            { slide: 3, type: "text", text: "<strong>Bộ câu hỏi trắc nghiệm phát triển năng lượng và nghề nghiệp:</strong>" },
            { slide: 3, type: "text", text: "<strong>Câu 1:</strong> Một người lao động thực hiện công việc: 'nghiên cứu kiến thức kĩ thuật điện để phân tích, tạo ra các bản vẽ sơ đồ mạch điện'. Người này thuộc nhóm nghề:<br>A. Lắp đặt điện. | <strong>B. Thiết kế điện.</strong> | C. Vận hành điện. | D. Sửa chữa điện." },
            { slide: 3, type: "text", text: "<strong>Câu 2:</strong> Nhóm nghề nào thường xuyên làm việc tại hiện trường, công trình xây dựng, đòi hỏi sức khỏe tốt và kỉ luật cao?<br>A. Thiết kế điện. | B. Sản xuất thiết bị. | <strong>C. Lắp đặt điện.</strong> | D. Vận hành điện." },

            // Slide 4: Trắc nghiệm Đúng/Sai (Vận hành & Sản xuất)
            { slide: 4, type: "text", text: "<strong>Câu 4: Đánh giá Đúng/Sai về nhóm nghề Vận hành điện:</strong>" },
            { slide: 4, type: "list", items: [
                "a) Công việc chính là duy trì chế độ làm việc bình thường của hệ thống điện. <strong>(ĐÚNG)</strong>",
                "b) Người làm nghề này không cần có tư duy logic hay khả năng xử lí sự cố. <strong>(SAI)</strong>",
                "c) Năng lực cần thiết là nắm vững quy trình và nhận biết nguy hiểm tiềm ẩn. <strong>(ĐÚNG)</strong>",
                "d) Môi trường làm việc chỉ giới hạn trong các văn phòng điều hành lưới điện. <strong>(SAI)</strong>"
            ]},

            // Slide 5: Trắc nghiệm trả lời ngắn (Form mới 2025)
            { slide: 5, type: "summary", title: "Phần trả lời ngắn & Ghép nối", text: "<strong>Câu 6:</strong> Lĩnh vực kĩ thuật điện được phân thành bao nhiêu nhóm ngành nghề chính? -> <strong>Đáp án: 5</strong>" },
            { slide: 5, type: "summary", title: "Câu hỏi điền khuyết", text: "<strong>Câu 7:</strong> Ngành lắp đặt điện có môi trường làm việc đặc thù là thường xuyên làm việc tại <u>...........</u>, các công trình xây dựng, trong nhà hoặc ngoài trời. -> <strong>Đáp án: hiện trường</strong>" }
        ]
    },

    // ==========================================
    // BÀI 3: MẠCH ĐIỆN XOAY CHIỀU BA PHA
    // ==========================================
    {
        id: "cn12-bai-3",
        title: "Bài 3: Mạch điện xoay chiều ba pha",
        blocks: [
            // Slide 1: Lý thuyết cốt lõi & Quy luật nối
            { slide: 1, type: "definition", title: "Cấu trúc mạch 3 pha", text: "Mạch điện xoay chiều 3 pha bao gồm nguồn điện 3 pha (stator có 3 cuộn dây đặt lệch nhau $120^\\circ$), đường dây truyền tải và tải tiêu thụ 3 pha." },
            { slide: 1, type: "list", items: [
                "<strong>Nối hình sao (Y):</strong> Dòng điện dây bằng dòng điện pha ($I_d = I_p$), điện áp dây bằng căn 3 lần điện áp pha ($U_d = \\sqrt{3}U_p$)",
                "<strong>Nối hình tam giác ($\\Delta$):</strong> Điện áp dây bằng điện áp pha ($U_d = U_p$), dòng điện dây bằng căn 3 lần dòng điện pha ($I_d = \\sqrt{3}I_p$)"
            ]},

            // Slide 2: Bài toán trắc nghiệm tính toán nhanh (Phần I)
            { slide: 2, type: "text", text: "<strong>Bài toán Luyện tập tính toán thông số mạch đối xứng:</strong>" },
            { slide: 2, type: "warning", title: "Dạng 1: Tải nối hình sao (Y)", text: "Mạch điện ba pha đối xứng có tải nối hình sao, $R=20\\,\\Omega$, điện áp pha của tải là $220\\,\\text{V}$. Tính $I_p$?<br><strong>Giải:</strong> Định luật Ohm cho một pha: $I_p = \\frac{U_p}{R} = \\frac{220}{20} = 11\\,\\text{A}$." },
            { slide: 2, type: "warning", title: "Dạng 2: Tải nối hình tam giác ($\\Delta$)", text: "Mạch điện ba pha đối xứng có $U_d=380\\,\\text{V}$, tải nối hình tam giác có điện trở mỗi pha $R=50\\,\\Omega$. Tính $I_p$?<br><strong>Giải:</strong> Nối tam giác nên $U_p = U_d = 380\\,\\text{V}$. Suy ra $I_p = \\frac{U_p}{R} = \\frac{380}{50} = 7,6\\,\\text{A}$." },

            // Slide 3: Trắc nghiệm nhận biết (7 Câu trọng tâm)
            { slide: 3, type: "text", text: "<strong>Câu hỏi trắc nghiệm nhiều phương án lựa chọn:</strong>" },
            { slide: 3, type: "text", text: "<strong>Câu 1:</strong> Trong máy phát 3 pha, các cuộn dây đặt lệch nhau một góc bao nhiêu?<br>A. $60^\\circ$ | B. $90^\\circ$ | <strong>C. $120^\\circ$</strong> | D. $180^\\circ$" },
            { slide: 3, type: "text", text: "<strong>Câu 2:</strong> Khi nối hình sao (Y) cho nguồn đối xứng, mối liên hệ giữa $U_d$ và $U_p$ là:<br><strong>A. $U_d = \\sqrt{3}U_p$</strong> | B. $U_p = \\sqrt{3}U_d$ | C. $U_d = U_p$ | D. $U_d = 3U_p$" },

            // Slide 4: Kịch bản phân xưởng thực tế (Đúng/Sai)
            { slide: 4, type: "text", text: "<strong>Câu 8: Phân tích mạch điện ba pha phân xưởng ($U_d/U_p = 380/220\\,\\text{V}$):</strong><br>Tải 1 (3 bóng đèn 220V nối Y có dây trung tính). Tải 2 (máy sấy 3 pha, mỗi pha $R=38\\,\\Omega$ nối $\\Delta$)." },
            { slide: 4, type: "list", items: [
                "a) Tải 1 được nối hình sao giúp các bóng đèn làm việc ở đúng điện áp định mức 220 V. <strong>(ĐÚNG)</strong>",
                "b) Điện áp pha của Tải 2 khi đang hoạt động là 220 V. <strong>(SAI - Vì nối tam giác nên $U_p = U_d = 380\\,\\text{V}$ thay vì 220V)</strong>",
                "c) Dòng điện pha của Tải 2 tính được là 10 A. <strong>(ĐÚNG - Vì $I_p = \\frac{380}{38} = 10\\,\\text{A}$)</strong>",
                "d) Nếu dây trung tính của Tải 1 bị đứt, các bóng đèn vẫn luôn sáng bình thường. <strong>(SAI - Điện áp trên các pha sẽ bị lệch nghiêm trọng nếu tải không đối xứng)</strong>"
            ]},

            // Slide 5: Trắc nghiệm trả lời ngắn (Mẫu thi 2025)
            { slide: 5, type: "summary", title: "Câu hỏi tính toán nâng cao - Trả lời ngắn", text: "<strong>Câu 10:</strong> Một tải ba pha gồm 3 điện trở $R=50\\,\\Omega$ nối hình tam giác, nối vào nguồn ba pha có $U_d=380\\,\\text{V}$. Hãy tính giá trị dòng điện dây $I_d$ (Làm tròn kết quả đến 2 chữ số thập phân)?" },
            { slide: 5, type: "definition", title: "Hướng dẫn các bước giải nhanh", text: "Bước 1: Do tải nối $\\Delta \\Rightarrow U_p = U_d = 380\\,\\text{V}$<br>Bước 2: Tính dòng điện pha: $I_p = \\frac{380}{50} = 7,6\\,\\text{A}$<br>Bước 3: Tính dòng điện dây: $I_d = \\sqrt{3} \\times I_p = \\sqrt{3} \\times 7,6 \\approx 13,16\\,\\text{A}$.<br><strong>Đáp án điền: 13,16</strong>" }
        ]
    },

    // ==========================================
    // BÀI 4: HỆ THỐNG ĐIỆN QUỐC GIA
    // ==========================================
    {
        id: "cn12-bai-4",
        title: "Bài 4: Hệ thống điện quốc gia",
        blocks: [
            // Slide 1: Khái niệm & Sơ đồ cấu trúc
            { slide: 1, type: "definition", title: "Định nghĩa hệ thống", text: "Hệ thống điện quốc gia là một hệ thống hợp nhất bao gồm các khâu: Sản xuất (Nhà máy điện), Truyền tải (Đường dây cao thế), Phân phối và Tiêu thụ trên phạm vi toàn quốc dưới một sự điều độ thống nhất." },
            { slide: 1, type: "summary", title: "Trọng tâm bộ đề thi tốt nghiệp", text: "Bài học này xuất hiện liên tục trong bộ đề thi gốc từ 0601 đến 0648, tập trung đánh giá năng lực đọc sơ đồ hệ thống điện và phân biệt các cấp trạm biến áp tăng áp / hạ áp." },

            // Slide 2: Phân tích trạm biến áp từ sơ đồ gốc
            { slide: 2, type: "text", text: "<strong>Dạng câu hỏi phân tích sơ đồ hệ thống điện (Đề 0601 - 0602):</strong>" },
            { slide: 2, type: "warning", title: "Trạm biến áp tăng áp (Mã đề 0601)", text: "Điện áp từ nhà máy điện (thường là 10,5 kV hoặc 22 kV) sẽ được trạm tăng áp đẩy lên cấp siêu cao thế (110 kV, 220 kV, 500 kV) để truyền tải đi xa, giảm tổn thất điện năng $\\Delta P$.<br>-> <strong>Cặp trạm tăng áp tiêu biểu: 22/220 kV và 10,5/110 kV.</strong>" },
            { slide: 2, type: "warning", title: "Trạm biến áp hạ áp (Mã đề 0602)", text: "Các trạm có trị số điện áp đầu ra thấp hơn điện áp đầu vào để chuẩn bị đưa về các xưởng sản xuất và hộ gia đình.<br>-> <strong>Cặp trạm hạ áp tiêu biểu: 110/22 kV và 22/0,4 kV.</strong>" },

            // Slide 3: Phân loại lưới điện Việt Nam
            { slide: 3, type: "text", text: "<strong>Dạng câu hỏi về cấp điện áp truyền tải quy chuẩn tại Việt Nam:</strong>" },
            { slide: 3, type: "text", text: "<strong>Câu hỏi đề thi:</strong> Ở Việt Nam, đường dây có cấp điện áp nào dưới đây thuộc lưới điện truyền tải?<br>A. 0,4 kV. | B. 6 kV. | C. 22 kV. | <strong>D. 220 kV và 500 kV.</strong>" },
            { slide: 3, type: "summary", title: "Căn cứ lý thuyết tiêu chuẩn", text: "Lưới điện truyền tải quốc gia có nhiệm vụ đưa điện từ nhà máy lớn đến các trạm khu vực, sử dụng cấp 220 kV và 500 kV. Các cấp nhỏ hơn (35 kV, 22 kV, 0,4 kV) thuộc lưới điện phân phối." },

            // Slide 4: Câu hỏi luyện tập củng cố (SGK)
            { slide: 4, type: "text", text: "<strong>Hệ thống câu hỏi phát triển năng lực tự học của sách giáo khoa:</strong>" },
            { slide: 4, type: "list", items: [
                "1. Trình bày vai trò của 3 thành phần cốt lõi: Nguồn điện, lưới điện và tải tiêu thụ.",
                "2. Giải thích sự khác biệt cơ bản về quy mô và chức năng giữa lưới điện truyền tải và lưới điện phân phối.",
                "3. Vẽ sơ đồ khối của mạng điện ba pha bốn dây dùng trong lưới điện sinh hoạt gia đình."
            ]},

            // Slide 5: Tóm tắt ghi nhớ nhanh
            { slide: 5, type: "summary", title: "Bảng tra cứu mốc điện áp quan trọng", text: "Để giải quyết nhanh các mã đề thi từ 0601 đến 0648, học sinh cần ghi nhớ:<br>• Cấp cao thế/siêu cao thế truyền tải: 220 kV và 500 kV.<br>• Cấp trung thế phân phối: 22 kV, 35 kV.<br>• Cấp hạ thế tiêu thụ dân dụng: 0,4 kV ($380/220\\,\\text{V}$)." }
        ]
    },

    // ==========================================
    // BÀI 5: SẢN XUẤT ĐIỆN NĂNG
    // ==========================================
    {
        id: "cn12-bai-5",
        title: "Bài 5: Sản xuất điện năng",
        blocks: [
            // Slide 1: Phân loại nguồn năng lượng
            { slide: 1, type: "definition", title: "Phân loại nguồn sản xuất", text: "Sản xuất điện năng được chia làm hai nhóm chính dựa vào tính chất nguồn năng lượng thô đầu vào:<br>1. Năng lượng không tái tạo: Nhiệt điện (than, khí đốt), điện hạt nhân.<br>2. Năng lượng tái tạo: Thủy điện, điện gió, mặt trời, sinh khối, địa nhiệt." },

            // Slide 2: So sánh Ưu/Nhược điểm các nhà máy
            { slide: 2, type: "text", text: "<strong>Bảng phân tích đặc tính kỹ thuật các mô hình nhà máy điện:</strong>" },
            { slide: 2, type: "table", headers: ["Mô hình nhà máy", "Ưu điểm", "Nhược điểm hạn chế"], rows: [
                ["Thủy điện", "Công suất lớn, chi phí vận hành thấp", "Ảnh hưởng lớn đến hệ sinh thái sông ngòi"],
                ["Nhiệt điện", "Xây dựng nhanh, công suất phát ổn định", "Gây ô nhiễm, phát thải khí nhà kính lớn"],
                ["Điện hạt nhân", "Công suất cực đại, không phụ thuộc thời tiết", "Chi phí đầu tư rất lớn, rủi ro phóng xạ"]
            ]},

            // Slide 3: Câu hỏi Vận dụng (Tính chất nguồn)
            { slide: 3, type: "text", text: "<strong>Câu hỏi giải quyết tình huống kỹ thuật trong SGK:</strong>" },
            { slide: 3, type: "text", text: "<strong>Tình huống:</strong> Tại sao hệ thống điện gió và điện mặt trời luôn bắt buộc phải lắp đặt kèm hệ thống lưu trữ năng lượng (pin tích năng - ESS) trong khi thủy điện và nhiệt điện lại không cần?" },
            { slide: 3, type: "warning", title: "Gợi ý trả lời", text: "Do điện gió và mặt trời phụ thuộc hoàn toàn vào tự nhiên, công suất phát biến thiên không ổn định. Cần pin tích năng để lưu trữ điện lúc cao điểm nắng/gió và xả ra cung cấp cho lưới lúc thời tiết không thuận lợi." },

            // Slide 4: Nhận diện mô hình qua hình ảnh
            { slide: 4, type: "text", text: "<strong>Kỹ năng nhận diện cấu trúc nhà máy (Trọng tâm câu hỏi sơ đồ):</strong>" },
            { slide: 4, type: "list", items: [
                "• Nhà máy thủy điện: Gồm hồ chứa nước, đập ngăn, ống áp lực, tuabin nước làm quay máy phát.",
                "• Nhà máy điện gió: Gồm cánh quạt, trục quay, bộ tăng tốc, máy phát điện và bộ biến đổi dòng điện (AC-DC-AC).",
                "• Kết nối năng lực: Tìm hiểu tỉ lệ các nguồn điện trong hệ thống điện quốc gia Việt Nam hiện nay."
            ]},

            // Slide 5: Định hướng ôn thi tốt nghiệp
            { slide: 5, type: "summary", title: "Khảo sát từ bộ 48 mã đề thi", text: "Nội dung Bài 5 không chiếm tỉ trọng lớn trong các mã đề từ 0601 đến 0648. Tuy nhiên, học sinh cần ghi nhớ bản chất phân loại năng lượng sạch để sẵn sàng xử lý các câu hỏi Đúng/Sai hoặc tình huống vận dụng thực tế mới." }
        ]
    },
    // ==========================================
    // BÀI 6: MẠNG ĐIỆN SẢN XUẤT QUY MÔ NHỎ
    // ==========================================
    {
        id: "cn12-bai-6",
        title: "Bài 6: Mạng điện sản xuất quy mô nhỏ",
        blocks: [
            // Slide 1: Đặc điểm và thông số kĩ thuật
            { slide: 1, type: "definition", title: "Đặc điểm đặc thù", text: "Mạng điện sản xuất quy mô nhỏ có công suất dưới vài trăm kW. Tải tiêu thụ chủ yếu là các động cơ không đồng bộ 3 pha (tải động lực) và hệ thống chiếu sáng nhà xưởng hoạt động độc lập." },
            { slide: 1, type: "summary", title: "Thông số tiêu chuẩn Việt Nam", text: "Điện áp định mức của lưới hạ áp dùng cho sản xuất quy mô nhỏ là 0,4 kV (tương đương mạng ba pha $380/220\\,\\text{V}$)." },

            // Slide 2: Đối soát câu hỏi trong bộ đề thi
            { slide: 2, type: "text", text: "<strong>Câu hỏi lồng ghép thực tế trong bộ đề 0601 - 0648:</strong>" },
            { slide: 2, type: "warning", title: "Câu hỏi về cấp điện áp", text: "Ở Việt Nam, đường dây có cấp điện áp nào dưới đây thuộc lưới điện hạ áp?<br><strong>Đáp án đúng: 0,4 kV</strong> (Đây là mốc điện áp cốt lõi của mạng sản xuất quy mô nhỏ)." },
            { slide: 2, type: "warning", title: "Câu hỏi về trạm hạ áp phân xưởng", text: "Khi đọc sơ đồ, vị trí trạm biến áp hạ áp thực hiện nhiệm vụ hạ điện áp từ lưới phân phối (22 kV) xuống cấp điện áp làm việc của phân xưởng là trạm có thông số <strong>22/0,4 kV</strong>." },

            // Slide 3: Quy trình đóng cắt vận hành (SGK)
            { slide: 3, type: "text", text: "<strong>Nguyên tắc đóng/cắt điện an toàn trong phân xưởng sản xuất:</strong>" },
            { slide: 3, type: "text", text: "<strong>Câu hỏi Vận dụng:</strong> Tại sao khi ngắt (cắt) điện ta phải thực hiện theo trình tự từ tải về nguồn (ngược lại hoàn toàn với lúc đóng điện)?" },
            { slide: 3, type: "warning", title: "Giải thích nguyên lý kỹ thuật", text: "Để đảm bảo an toàn tuyệt đối cho thiết bị và kỹ sư vận hành. Cắt từ tải trước giúp giảm dòng điện chạy trên đường dây, tránh phát sinh hồ quang điện cực lớn tại các tiếp điểm đóng cắt của tủ điện tổng khi ngắt dòng đột ngột." },

            // Slide 4: Thứ tự lắp ráp hệ thống
            { slide: 4, type: "text", text: "<strong>Sắp xếp trật tự các thiết bị tạo thành mạng điện sản xuất:</strong>" },
            { slide: 4, type: "list", items: [
                "Bước 1: Trạm biến áp hạ áp (Nhận điện từ lưới trung thế)",
                "Bước 2: Tủ điện phân phối tổng (Đặt ngay sau trạm biến áp, dùng aptomat lớn ACB/MCCB)",
                "Bước 3: Tủ điện phân phối nhánh (Chia điện về các khu vực xưởng)",
                "Bước 4: Tủ điện động lực và tủ điện chiếu sáng điều khiển các máy công cụ."
            ]},

            // Slide 5: Trắc nghiệm Đúng/Sai kiểm tra bài 6
            { slide: 5, type: "text", text: "<strong>Câu hỏi trắc nghiệm Đúng/Sai ôn tập trọng tâm:</strong>" },
            { slide: 5, type: "list", items: [
                "a) Tủ điện chiếu sáng dùng để cấp điện cho hệ thống đèn trong phân xưởng. <strong>(ĐÚNG)</strong>",
                "b) Mạng điện sản xuất quy mô nhỏ lấy điện trực tiếp từ lưới truyền tải cao thế 220 kV. <strong>(SAI - Lấy từ lưới hạ áp hoặc qua TBA riêng)</strong>",
                "c) Tủ điện phân phối tổng luôn được bố trí lắp đặt ngay sau trạm biến áp hạ áp. <strong>(ĐÚNG)</strong>",
                "d) Việc sử dụng aptomat (MCB/MCCB) trong các tủ điện giúp tự động bảo vệ mạch khi quá tải, ngắn mạch. <strong>(ĐÚNG)</strong>"
            ]}
        ]
    },

    // ==========================================
    // BÀI 7: MẠNG ĐIỆN HẠ ÁP DÙNG TRONG SINH HOẠT
    // ==========================================
    {
        id: "cn12-bai-7",
        title: "Bài 7: Mạng điện hạ áp sinh hoạt",
        blocks: [
            // Slide 1: Giao diện và thông số mạng sinh hoạt
            { slide: 1, type: "definition", title: "Thông số tiêu chuẩn", text: "Mạng điện hạ áp dùng trong sinh hoạt tại Việt Nam có điện áp định mức $380/220\\,\\text{V}$, tần số xoay chiều $50\\,\\text{Hz}$. Cấu trúc mạng gồm 3 pha và 4 dây (3 dây pha, 1 dây trung tính)." },
            { slide: 1, type: "summary", title: "So sánh với mạng sản xuất (Bài 6)", text: "Mạng sinh hoạt có cấp điện áp giống mạng sản xuất nhỏ ($380/220\\text{V}$), nhưng đặc điểm tải của mạng sinh hoạt là công suất nhỏ, vị trí phân tán và chủng loại thiết bị cực kỳ đa dạng." },

            // Slide 2: Đối soát câu hỏi đề thi (Kéo cáp & TBA)
            { slide: 2, type: "text", text: "<strong>Các câu hỏi thực tế xuất hiện trong bộ đề thi (0601 - 0648):</strong>" },
            { slide: 2, type: "warning", title: "Câu hỏi 1: Nhận diện ngành nghề thi công", text: "Công việc kéo dây điện để kết nối nguồn từ lưới điện hạ áp tới các hộ gia đình trong một khu dân cư thuộc nhóm ngành nghề nào?<br>-> <strong>Đáp án đúng: Lắp đặt điện.</strong> (Đây chính là hoạt động thi công thành phần 'Đường cáp điện' của bài 7)." },
            { slide: 2, type: "warning", title: "Câu hỏi 2: Trạm biến áp đầu nguồn", text: "Thành phần đầu tiên biến đổi điện để cấp cho mạng sinh hoạt là trạm biến áp hạ áp, lấy điện từ lưới phân phối trung thế đưa về tủ tổng khu dân cư.<br>-> <strong>Ký hiệu trạm trên sơ đồ: 22/0,4 kV.</strong>" },

            // Slide 3: Sơ đồ cấu trúc mạng sinh hoạt
            { slide: 3, type: "text", text: "<strong>Thứ tự kết nối các thành phần từ nguồn đến hộ gia đình:</strong>" },
            { slide: 3, type: "list", items: [
                "1. Trạm biến áp hạ áp khu vực",
                "2. Tủ điện phân phối tổng mạng hạ áp (Dùng aptomat khối MCCB)",
                "3. Tủ điện phân phối khu vực / Tủ điện nhánh (Dùng MCCB/MCB)",
                "4. Đường cáp điện hạ áp chạy dọc các tuyến đường",
                "5. Hộp công tơ điện đầu vào của từng hộ gia đình"
            ]},

            // Slide 4: Thiết bị đóng cắt bảo vệ hệ thống
            { slide: 4, type: "text", text: "<strong>Quy chuẩn sử dụng thiết bị đóng cắt theo cấp phân phối (Hình 7.2 SGK):</strong>" },
            { slide: 4, type: "table", headers: ["Vị trí tủ điện", "Loại Aptomat tiêu chuẩn sử dụng"], rows: [
                ["Tủ điện phân phối tổng", "Aptomat không khí (ACB) hoặc Aptomat khối (MCCB) dòng lớn"],
                ["Tủ điện phân phối khu vực (nhánh)", "Aptomat khối (MCCB) hoặc Aptomat tép (MCB)"],
                ["Hộp công tơ hộ gia đình", "Aptomat tép (MCB) kết hợp thiết bị chống rò dòng (RCCB)"]
            ]},

            // Slide 5: Hoạt động tự học thực tế
            { slide: 5, type: "summary", title: "Nhiệm vụ vận dụng sáng tạo (SGK trang 37)", text: "Học sinh tiến hành khảo sát thực tế khu phố/thôn xóm đang cư trú, thực hiện vẽ sơ đồ khối mô tả mạch điện hạ áp từ trạm biến áp khu vực qua đường dây truyền tải hạ thế dẫn vào hộp công tơ điện của gia đình mình." }
        ]
    },

    // ==========================================
    // BÀI 8: HỆ THỐNG ĐIỆN IN GIA ĐÌNH
    // ==========================================
    {
        id: "cn12-bai-8",
        title: "Bài 8: Hệ thống điện trong gia đình",
        blocks: [
            // Slide 1: Sơ đồ khối hệ thống điện gia đình
            { slide: 1, type: "definition", title: "Cấu trúc chuỗi liên kết", text: "Hệ thống điện gia đình được kết nối theo thứ tự nghiêm ngặt sau:<br>Nguồn điện lưới hạ áp $\\rightarrow$ Công tơ điện $\\rightarrow$ Tủ điện tổng gia đình $\\rightarrow$ Các tủ điện nhánh / Mạch nhánh $\\rightarrow$ Thiết bị đóng cắt, điều khiển $\\rightarrow$ Tải tiêu thụ điện." },

            // Slide 2: Phân biệt Sơ đồ Nguyên lý & Sơ đồ Lắp đặt
            { slide: 2, type: "text", text: "<strong>Kỹ năng cốt lõi để giải quyết các kịch bản sơ đồ mạch điện:</strong>" },
            { slide: 2, type: "table", headers: ["Loại sơ đồ", "Đặc điểm nhận diện", "Vai trò ứng dụng thực tế"], rows: [
                ["Sơ đồ nguyên lý", "Chỉ thể hiện mối liên hệ về điện của linh kiện", "Dùng để nghiên cứu, phân tích nguyên lý làm việc"],
                ["Sơ đồ lắp đặt", "Thể hiện vị trí sắp xếp, cách đi dây thực tế", "Dùng để dự trù vật tư, thi công lắp đặt mạch"]
            ]},

            // Slide 3: Tình huống đề thi Đúng/Sai - Kịch bản phòng bếp
            { slide: 3, type: "text", text: "<strong>Kịch bản 1: Phân tích thiết kế mạch điện phòng bếp (Đề thi Tốt nghiệp):</strong><br>Sơ đồ thiết kế gồm Aptomat tổng Ap1, Aptomat nhánh Ap2 cấp cho bếp điện, cầu chì CC bảo vệ mạch đèn và ổ cắm." },
            { slide: 3, type: "list", items: [
                "a) Aptomat Ap1 là thiết bị thực hiện chức năng đóng cắt và bảo vệ an toàn cho toàn bộ mạch điện gia đình. <strong>(ĐÚNG)</strong>",
                "b) Cầu chì CC dùng để bảo vệ mạch điện gồm các thiết bị: công tắc, bóng đèn và ổ cắm. <strong>(ĐÚNG - Cầu chì bảo vệ tải công suất nhỏ)</strong>",
                "c) Việc tính toán tiết diện lõi dây dẫn điện phụ thuộc vào mật độ dòng điện cho phép J. <strong>(ĐÚNG)</strong>"
            ]},

            // Slide 4: Tình huống đề thi Đúng/Sai - Kịch bản phòng tắm
            { slide: 4, type: "text", text: "<strong>Kịch bản 2: Phân tích thiết kế mạch điện phòng tắm (Đề thi Tốt nghiệp):</strong><br>Mạch gồm aptomat tổng Ap1, aptomat nhánh Ap2 cấp cho bình nóng lạnh (BNL), cầu chì CC bảo vệ nhánh đèn chiếu sáng." },
            { slide: 4, type: "list", items: [
                "a) Mạch điện gia đình sử dụng nguồn điện xoay chiều một pha, điện áp tiêu chuẩn 220 V. <strong>(ĐÚNG)</strong>",
                "b) Công tắc trong sơ đồ được mắc nối tiếp trước đèn để thực hiện nhiệm vụ đóng cắt. <strong>(ĐÚNG)</strong>",
                "c) Khi chọn dòng định mức cho Aptomat Ap2 của bình nóng lạnh, không cần tính đến hệ số an toàn. <strong>(SAI - Bắt buộc phải nhân hệ số an toàn từ 1,2 đến 1,5)</strong>"
            ]},

            // Slide 5: Kí hiệu quy ước tiêu chuẩn (TCVN)
            { slide: 5, type: "summary", title: "Trọng tâm ghi nhớ Bảng 8.1", text: "Để giải quyết nhanh các câu hỏi Đúng/Sai lồng ghép giữa Bài 8 và Bài 9, học sinh cần thuộc lòng kí hiệu đồ họa của: Công tơ điện (vòng tròn có chữ kWh), Aptomat (tiếp điểm có móc bảo vệ), Cầu chì (hình chữ nhật có dây xuyên qua), và Ổ cắm điện." }
        ]
    },

    // ==========================================
    // BÀI 9: THIẾT BỊ ĐIỆN TRONG HỆ THỐNG ĐIỆN GIA ĐÌNH
    // ==========================================
    {
        id: "cn12-bai-9",
        title: "Bài 9: Thiết bị điện gia đình",
        blocks: [
            // Slide 1: Công tơ điện & Cấp chính xác
            { slide: 1, type: "definition", title: "Ý nghĩa thông số Công tơ", text: "Công tơ điện dùng để đo lường điện năng tiêu thụ của gia đình (đơn vị kWh). Cấp chính xác biểu thị sai số phép đo của công tơ:<br>• Cấp 2: Sai số đo lượng điện năng là 2%.<br>• Cấp 1: Sai số đo lượng điện năng là 1%.<br>• Cấp chính xác có trị số càng nhỏ thì độ chính xác càng cao." },

            // Slide 2: Thiết bị đóng cắt và bảo vệ (Aptomat vượt trội)
            { slide: 2, type: "text", text: "<strong>So sánh tính năng các thiết bị đóng cắt và bảo vệ mạch điện:</strong>" },
            { slide: 2, type: "list", items: [
                "• <strong>Công tắc:</strong> Đóng cắt bằng tay cho tải công suất nhỏ (đèn).",
                "• <strong>Cầu dao:</strong> Đóng cắt bằng tay, cần lắp kèm cầu chì để bảo vệ ngắn mạch.",
                "• <strong>Aptomat (MCB):</strong> Vượt trội hoàn toàn nhờ tích hợp cả 2 chức năng: Đóng cắt bằng tay và <strong>tự động cắt mạch điện</strong> khi xảy ra sự cố quá tải hoặc ngắn mạch mà không cần phải thay thế dây chì."
            ]},

            // Slide 3: Bài toán vận dụng tính toán dòng điện chọn dây
            { slide: 3, type: "warning", title: "Bài toán chọn thiết bị bảo vệ & Tiết diện dây dẫn", text: "Cho một máy sấy quần áo có công suất $P = 2600\\,\\text{W}$, điện áp $U = 220\\,\\text{V}$, hệ số công suất $\\cos\\phi = 0,8$. Biết mật độ dòng điện cho phép của lõi đồng là $J = 6\\,\\text{A/mm}^2$." },
            { slide: 3, type: "definition", title: "Các bước giải chi tiết", text: "Bước 1: Tính dòng điện định mức của máy sấy:<br>$I = \\frac{P}{U \\times \\cos\\phi} = \\frac{2600}{220 \\times 0,8} \\approx 14,77\\,\\text{A}$<br>Bước 2: Tính tiết diện lõi dây dẫn cần thiết: $S = \\frac{I}{J} = \\frac{14,77}{6} \\approx 2,46\\,\\text{mm}^2$.<br>$\\Rightarrow$ Tra bảng quy chuẩn, ta chọn dây dẫn có tiết diện <strong>$2,5\\,\\text{mm}^2$</strong> và chọn Aptomat loại <strong>16 A hoặc 20 A</strong>." },

            // Slide 4: Trắc nghiệm khách quan nhiều lựa chọn
            { slide: 4, type: "text", text: "<strong>Câu hỏi trắc nghiệm trích từ ngân hàng đề thi tốt nghiệp:</strong>" },
            { slide: 4, type: "text", text: "<strong>Câu 1:</strong> Trên vỏ một dây dẫn điện có ghi: Cu – 220 V – 1,0 mm2. Thông số 1,0 mm2 chỉ điều gì?<br>A. Chiều dài dây. | B. Mật độ dòng điện. | <strong>C. Diện tích mặt cắt ngang (tiết diện) của lõi dây.</strong> | D. Điện áp định mức." },
            { slide: 4, type: "text", text: "<strong>Câu 2:</strong> Một máy bơm nước $850\\,\\text{W}$, dòng điện tính toán là $4,83\\,\\text{A}$. Nên chọn Aptomat bảo vệ nào phù hợp?<br>A. MCB 1P/6A. | <strong>B. MCB 1P/10A.</strong> | C. MCB 1P/16A. | D. MCB 1P/20A." },

            // Slide 5: Trắc nghiệm Đúng/Sai tổng kết bài 9
            { slide: 5, type: "text", text: "<strong>Câu 9: Đánh giá tính Đúng/Sai về quy chuẩn thiết bị điện gia đình:</strong>" },
            { slide: 5, type: "list", items: [
                "a) Tiết diện lõi dây dẫn càng lớn thì dòng điện cho phép chạy qua dây càng nhỏ. <strong>(SAI - Tiết diện càng lớn, dòng cho phép càng lớn)</strong>",
                "b) Khi tính dòng định mức chọn Aptomat cho động cơ máy bơm, bắt buộc phải tính đến dòng điện khởi động. <strong>(ĐÚNG)</strong>",
                "c) Cầu dao điện là thiết bị an toàn nhất hiện nay và đã thay thế hoàn toàn cho Aptomat. <strong>(SAI - Ngược lại, Aptomat đang thay thế cầu dao)</strong>",
                "d) Aptomat chống rò dòng (RCCB/ELCB) có khả năng tự động ngắt mạch khi phát hiện có dòng điện rò rỉ hoặc người bị điện giật. <strong>(ĐÚNG)</strong>"
            ]}
        ]
    },

    // ==========================================
    // BÀI 10: THIẾT KẾ VÀ LẮP ĐẶT MẠCH ĐIỆN ĐIỀU KHIỂN TRONG GIA ĐÌNH
    // ==========================================
    {
        id: "cn12-bai-10",
        title: "Bài 10: Thiết kế mạch điều khiển gia đình",
        blocks: [
            // Slide 1: Quy trình 3 bước thiết kế mạch
            { slide: 1, type: "definition", title: "Quy trình thiết kế chuẩn", text: "Để thiết kế một mạch điện điều khiển đơn giản trong gia đình, người thợ thực hiện theo 3 bước:<br>• Bước 1: Vẽ sơ đồ nguyên lý (nghiên cứu nguyên lý làm việc).<br>• Bước 2: Vẽ sơ đồ lắp đặt (dự trù vật tư, xác định vị trí đi dây).<br>• Bước 3: Lựa chọn vật tư, thiết bị." },

            // Slide 2: Linh kiện cốt lõi - Công tắc ba cực
            { slide: 2, type: "text", text: "<strong>Ứng dụng mạch điều khiển hai vị trí (Đèn cầu thang / Sân vườn):</strong>" },
            { slide: 2, type: "warning", title: "Linh kiện trung tâm", text: "Để bật/tắt một bóng đèn từ hai nơi khác nhau, hệ thống bắt buộc phải sử dụng <strong>Công tắc ba cực</strong>. Cấu tạo gồm 1 cực chung (cực tĩnh) và 2 cực chuyển mạch (cực động)." },
            { slide: 2, type: "summary", title: "Nguyên tắc đấu nối", text: "Nguồn điện lưới luôn được đấu nối trực tiếp vào cực chung (cực tĩnh) của công tắc ba cực đầu tiên để đảm bảo tính năng chuyển mạch điều khiển liên tục." },

            // Slide 3: Trắc nghiệm Đúng/Sai phân tích sơ đồ mạch
            { slide: 3, type: "text", text: "<strong>Đánh giá Đúng/Sai khi thực hiện mạch điều khiển đèn từ hai vị trí:</strong>" },
            { slide: 3, type: "list", items: [
                "a) Sơ đồ nguyên lý (Hình 10.3) cho thấy hai công tắc ba cực được mắc song song trực tiếp với nhau. <strong>(SAI - Chúng được kết nối nối tiếp các cực động tương ứng)</strong>",
                "b) Việc lựa chọn số lượng và thông số kỹ thuật vật tư phải dựa chính xác trên bảng tính toán phụ tải Bảng 10.1. <strong>(ĐÚNG)</strong>",
                "c) Sơ đồ lắp đặt không nhất thiết phải thể hiện vị trí của bảng điện. <strong>(SAI - Sơ đồ lắp đặt bắt buộc phải định vị rõ vị trí bảng điện và máng dây)</strong>"
            ]},

            // Slide 4: Khảo sát sơ đồ thực tế (Hình 10.4)
            { slide: 4, type: "text", text: "<strong>Câu hỏi thông hiểu đọc sơ đồ mạch sân vườn:</strong>" },
            { slide: 4, type: "text", text: "Trong sơ đồ lắp đặt mạch điện điều khiển sân vườn ở Hình 10.4, bóng đèn chiếu sáng được bố trí đặt ở vị trí nào?<br>A. Trong nhà. | <strong>B. Ngoài sân.</strong> | C. Tại tủ tổng. | D. Giữa hai công tắc." },

            // Slide 5: Chú ý an toàn khi lắp ráp mạch
            { slide: 5, type: "summary", title: "Nguyên tắc an toàn thực hành lắp mạch", text: "Để đảm bảo an toàn tuyệt đối trong quá trình chạy thử nghiệm mạch điện điều khiển vừa lắp ráp, học sinh nên sử dụng phích cắm để lấy nguồn điện hạ áp từ ổ cắm có sẵn (qua aptomat bảo vệ riêng) thay vì đấu nối trực tiếp vào nguồn lưới điện tổng của phòng thực hành." }
        ]
    },

    // ==========================================
    // BÀI 11: AN TOÀN ĐIỆN
    // ==========================================
    {
        id: "cn12-bai-11",
        title: "Bài 11: An toàn điện",
        blocks: [
            // Slide 1: Tác hại của dòng điện & Công cụ kiểm tra
            { slide: 1, type: "definition", title: "Nguy hiểm tính mạng", text: "Dòng điện xoay chiều có cường độ trên $30\\,\\text{mA}$ chạy qua cơ thể người ( xuyên qua tim) có thể gây co thắt lồng ngực, ngạt thở và ngừng tim cấp tính." },
            { slide: 1, type: "summary", title: "Dụng cụ kiểm tra rò điện bắt buộc", text: "Trước khi tiến hành bất kỳ thao tác bảo dưỡng hay sửa chữa thiết bị điện nào, bắt buộc phải sử dụng <strong>Bút thử điện</strong> để kiểm tra xem bề mặt thiết bị có bị rò rỉ điện hay không." },

            // Slide 2: Đối soát câu hỏi trọng tâm trong bộ đề thi
            { slide: 2, type: "text", text: "<strong>Câu hỏi kinh điển xuất hiện lặp lại trong nhiều mã đề thi (0601 - 0648):</strong>" },
            { slide: 2, type: "text", text: "<strong>Câu hỏi:</strong> Khi lắp đặt máy giặt dùng trong hộ gia đình, người thợ điện cần thực hiện công việc nào dưới đây để đảm bảo an toàn điện cho người sử dụng?<br>A. Nối dây tiếp đất với phần nhựa của máy giặt.<br><strong>B. Nối dây tiếp đất với vỏ kim loại của máy giặt.</strong><br>C. Nối phần nhựa của máy giặt với hệ thống chống sét.<br>D. Nối vỏ kim loại của máy giặt với hệ thống chống sét." },

            // Slide 3: Phân tích nguyên lý bảo vệ nối đất
            { slide: 3, type: "warning", title: "Tại sao phải nối đất vỏ kim loại?", text: "Đối với các thiết bị gia dụng có vỏ ngoài bằng kim loại (máy giặt, tủ lạnh, lò vi sóng), nếu xảy ra sự cố hỏng lớp cách điện bên trong, điện áp nguy hiểm sẽ rò ra vỏ. Việc nối đất bảo vệ giúp dẫn dòng điện rò thẳng xuống đất. Khi người chạm vào vỏ, do điện trở cơ thể người lớn hơn rất nhiều so với điện trở dây nối đất nên dòng điện sẽ không chạy qua người, tránh được điện giật." },

            // Slide 4: 4 nhóm biện pháp bảo vệ an toàn diện
            { slide: 4, type: "text", text: "<strong>Hệ thống kiến thức cốt lõi về biện pháp an toàn (SGK):</strong>" },
            { slide: 4, type: "list", items: [
                "1. Trong thiết kế: Sử dụng dây dẫn cách điện tốt, lắp đặt hệ thống nối đất và kim thu lôi chống sét.",
                "2. Trong sử dụng: Tuyệt đối không chạm vào dây điện trần, <strong>không vừa sạc pin vừa sử dụng điện thoại</strong>.",
                "3. Trong sửa chữa: Bắt buộc phải cắt nguồn điện, treo biển cảnh báo, sử dụng dụng cụ cách điện (kìm cách điện, tua vít cách điện).",
                "4. Khoảng cách an toàn: Không trú mưa dưới chân cột điện hoặc mái hiên trạm biến áp để tránh điện áp bước."
            ]},

            // Slide 5: Câu hỏi mở rộng tình huống thực tế
            { slide: 5, type: "summary", title: "Tình huống vận dụng thực tế", text: "<strong>Câu hỏi:</strong> Thiết kế, lắp đặt hệ thống nối đất và hệ thống chống sét cho một tòa nhà cao tầng giúp tránh được nguy cơ mất an toàn nào?<br><strong>Trả lời:</strong> Tránh nguy cơ điện giật cho con người khi thiết bị rò điện, đồng thời bảo vệ công trình khỏi nguy cơ cháy nổ, phá hủy thiết bị điện tử do dòng năng lượng cực lớn từ sét đánh trực tiếp hoặc lan truyền." }
        ]
    },

    // ==========================================
    // BÀI 12: TIẾT KIỆM ĐIỆN NĂNG
    // ==========================================
    {
        id: "cn12-bai-12",
        title: "Bài 12: Tiết kiệm điện năng",
        blocks: [
            // Slide 1: Trọng tâm đề thi - Hiệu suất các loại đèn
            { slide: 1, type: "definition", title: "Nguyên lý tiết kiệm điện", text: "Tiết kiệm điện năng là việc giảm lượng điện tiêu thụ nhưng vẫn đảm bảo nhu cầu sản xuất và sinh hoạt, thông qua việc lựa chọn thiết bị có hiệu suất chuyển đổi năng lượng cao." },
            { slide: 1, type: "summary", title: "Câu hỏi 'điểm tựa' trong bộ đề 0601 - 0648", text: "Đề thi luôn đưa ra câu hỏi trắc nghiệm yêu cầu so sánh khả năng tiết kiệm điện năng của bốn loại bóng đèn thế hệ cũ và mới dựa trên thông số công suất đầu vào." },

            // Slide 2: Phân tích bài toán chọn bóng đèn tiết kiệm
            { slide: 2, type: "text", text: "<strong>Dạng câu hỏi so sánh bóng đèn tiêu biểu trong đề thi tốt nghiệp:</strong>" },
            { slide: 2, type: "table", headers: ["Loại bóng đèn", "Độ sáng đầu ra", "Công suất định mức tiêu thụ"], rows: [
                ["Đèn sợi đốt thế hệ cũ", "1600 lumen", "100 W (Tiêu thụ nhiều điện nhất)"],
                ["Đèn ống huỳnh quang", "1600 lumen", "40 W"],
                ["Đèn compact", "1600 lumen", "23 W"],
                ["Đèn công nghệ LED", "1600 lumen", "<strong>16 W (Tiết kiệm điện năng nhất)</strong>"]
            ]},

            // Slide 3: Nhãn năng lượng và cách đọc sao
            { slide: 3, type: "text", text: "<strong>Tiêu chí lựa chọn thiết bị điện gia dụng thông minh (SGK):</strong>" },
            { slide: 3, type: "text", text: "Khi mua sắm các thiết bị điện gia đình như tủ lạnh, máy điều hòa, người ta dựa vào thông số nào trên vỏ để đánh giá khả năng tiết kiệm điện tốt nhất?" },
            { slide: 3, type: "warning", title: "Quy chuẩn Nhãn năng lượng", text: "Dựa vào số lượng sao được in trên <strong>Nhãn năng lượng</strong> của Bộ Công Thương. Thiết bị nào có số sao càng nhiều (tối đa là 5 sao) thì hiệu suất năng lượng càng cao và khả năng tiết kiệm điện của thiết bị đó càng vượt trội." },

            // Slide 4: 3 nhóm biện pháp tiết kiệm điện toàn diện
            { slide: 4, type: "text", text: "<strong>Tóm tắt nội dung trọng tâm bài 12 để làm bài Đúng/Sai:</strong>" },
            { slide: 4, type: "list", items: [
                "1. Trong thiết kế mạng điện: Chọn công nghệ phát điện hiệu suất cao, thiết kế đường đi dây tối ưu để giảm tổn thất truyền tải.",
                "2. Trong lắp đặt: Sử dụng thiết bị thông minh (cảm biến tự động tắt mở đèn, hẹn giờ kỹ thuật số), sử dụng điện mặt trời áp mái.",
                "3. Trong vận hành sử dụng: Tắt thiết bị khi ra khỏi phòng, <strong>vệ sinh bảo dưỡng định kỳ thường xuyên</strong> giúp động cơ giảm ma sát, tăng hiệu quả tản nhiệt và tiết kiệm điện."
            ]},

            // Slide 5: Biện pháp kiến trúc sinh thái xanh
            { slide: 5, type: "summary", title: "Vận dụng kiến thức vào kiến trúc nhà ở", text: "Một số biện pháp xây dựng công trình giúp tiết kiệm điện năng hiệu quả cho hộ gia đình bao gồm: Thiết kế nhà tận dụng tối đa hướng gió và ánh sáng tự nhiên; sử dụng vật liệu gạch cách nhiệt tốt; trồng nhiều cây xanh xung quanh nhà để giảm nhiệt độ môi trường, hạn chế sử dụng điều hòa." }
        ]
    },
    // ==========================================
    // BÀI 13: KHÁI QUÁT VỀ KĨ THUẬT ĐIỆN TỬ
    // ==========================================
    {
        id: "cn12-bai-13",
        title: "Bài 13: Tổng quan về kĩ thuật điện tử",
        blocks: [
            // Slide 1: Khái niệm & Cột mốc lịch sử
            { slide: 1, type: "definition", title: "Định nghĩa chuyên ngành", text: "Kĩ thuật điện tử là ngành kĩ thuật nghiên cứu ứng dụng sự chuyển động của các hạt điện tích (electron, lỗ trống) trong chất bán dẫn để thiết kế linh kiện, xử lý tín hiệu và điều khiển hệ thống." },
            { slide: 1, type: "summary", title: "Cột mốc lịch sử nền móng", text: "Thời đại điện tử chính thức được mở ra vào <strong>năm 1904</strong> với phát minh ra van nhiệt điện (diode chân không) của nhà khoa học <strong>John Ambrose Fleming</strong>." },

            // Slide 2: Phân loại hai lĩnh vực chính
            { slide: 2, type: "text", text: "<strong>Hệ thống kĩ thuật điện tử hiện đại được chia làm 2 phân nhánh:</strong>" },
            { slide: 2, type: "table", headers: ["Lĩnh vực điện tử", "Đặc điểm bản chất tín hiệu xử lý"], rows: [
                ["Điện tử tương tự (Analog)", "Xử lý tín hiệu có biên độ biến đổi liên tục theo thời gian"],
                ["Điện tử số (Digital)", "Xử lý tín hiệu rời rạc chỉ có 2 mức logic cố định (0 và 1)"]
            ]},

            // Slide 3: Vai trò trung tâm trong sản xuất (Matching)
            { slide: 3, type: "text", text: "<strong>Ghép nối vai trò của thiết bị điện tử trong dây chuyền sản xuất tự động:</strong>" },
            { slide: 3, type: "list", items: [
                "• <strong>Tay máy công nghiệp (Robot):</strong> Đảm nhận nhiệm vụ gắp – thả sản phẩm tự động trong dây chuyền.",
                "• <strong>Máy tiện CNC:</strong> Nhận lệnh lập trình để tự động hóa quá trình gia công cơ khí chính xác.",
                "• <strong>Phòng điều khiển trung tâm:</strong> Giám sát, thu thập dữ liệu và điều hành toàn bộ nhà máy từ xa."
            ]},

            // Slide 4: Thiết bị điện tử trong đời sống xã hội
            { slide: 4, type: "text", text: "<strong>Nhận biết vai trò của các thiết bị điện tử thông minh đối với con người:</strong>" },
            { slide: 4, type: "list", items: [
                "• Tivi thông minh kết nối internet: Đáp ứng nhu cầu thông tin, giải trí đa phương tiện.",
                "• Máy chụp cộng hưởng từ (MRI): Thiết bị điện tử hạt nhân hỗ trợ chẩn đoán hình ảnh chính xác trong y tế.",
                "• Robot hút bụi, Camera an ninh: Thiết bị gia dụng nâng cao mức độ an toàn và chất lượng cuộc sống sinh hoạt."
            ]},

            // Slide 5: Trắc nghiệm Đúng/Sai về Triển vọng điện tử
            { slide: 5, type: "text", text: "<strong>Câu hỏi trắc nghiệm Đúng/Sai đánh giá xu thế tương lai:</strong>" },
            { slide: 5, type: "list", items: [
                "a) Robot và máy móc thông minh ngày càng tích hợp sâu AI để tương tác tốt với con người. <strong>(ĐÚNG)</strong>",
                "b) Thiết bị kĩ thuật điện tử đóng vai trò là nền tảng cốt lõi để xây dựng kiến trúc các 'Thành phố thông minh'. <strong>(ĐÚNG)</strong>",
                "c) Trong thời đại công nghiệp số, kĩ thuật điện tử trong y tế sẽ dần bị thay thế hoàn toàn bởi phương pháp thủ công. <strong>(SAI)</strong>"
            ]}
        ]
    },

    // ==========================================
    // BÀI 14: NGÀNH NGHỀ VÀ DỊCH VỤ TRONG LĨNH VỰC KĨ THUẬT ĐIỆN TỬ
    // ==========================================
    {
        id: "cn12-bai-14",
        title: "Bài 14: Ngành nghề & Dịch vụ điện tử",
        blocks: [
            // Slide 1: Phân loại trình độ đào tạo ngành điện tử
            { slide: 1, type: "definition", title: "Mô hình nghề nghiệp", text: "Ngành nghề điện tử phân định rõ vị trí dựa trên học vấn chuyên môn tương tự ngành điện:<br>• <strong>Kĩ sư điện tử:</strong> Yêu cầu trình độ tốt nghiệp Đại học trở lên, làm nhiệm vụ nghiên cứu, tư vấn, thiết kế vi mạch.<br>• <strong>Kĩ thuật viên điện tử:</strong> Yêu cầu trình độ Trung cấp hoặc Cao đẳng, hỗ trợ thí nghiệm, vận hành dây chuyền.<br>• <strong>Thợ sửa chữa điện tử:</strong> Trình độ Sơ cấp, sửa chữa bo mạch điện dụng." },

            // Slide 2: Phân loại 4 nhóm dịch vụ điện tử
            { slide: 2, type: "text", text: "<strong>Hệ thống dịch vụ điện tử phục vụ đời sống xã hội hiện đại:</strong>" },
            { slide: 2, type: "table", headers: ["Nhóm dịch vụ", "Ứng dụng thực tế tiêu biểu"], rows: [
                ["Dịch vụ viễn thông", "Mạng dữ liệu di động 4G/5G, nhắn tin SMS, truyền hình hội nghị"],
                ["Dịch vụ tài chính", "Ứng dụng Smartbanking, thanh toán trực tuyến, rút tiền ATM"],
                ["Dịch vụ giao thông", "Hệ thống định vị Google Maps, thu phí tự động không dừng ETC"],
                ["Dịch vụ đào tạo", "Học trực tuyến (E-learning), kho học liệu điện tử số hóa"]
            ]},

            // Slide 3: Trắc nghiệm khách quan nhận biết dịch vụ
            { slide: 3, type: "text", text: "<strong>Hệ thống câu hỏi trắc nghiệm nhiều phương án lựa chọn:</strong>" },
            { slide: 3, type: "text", text: "<strong>Câu 1:</strong> Hệ thống thanh toán tự động qua trạm thu phí không dừng (ETC) là ứng dụng trong lĩnh vực nào?<br>A. Tài chính. | B. Viễn thông. | <strong>C. Giao thông.</strong> | D. Đào tạo." },
            { slide: 3, type: "text", text: "<strong>Câu 2:</strong> Các dịch vụ như Smartbanking, mua bán trên sàn thương mại điện tử thuộc nhóm dịch vụ:<br>A. Viễn thông. | <strong>B. Tài chính.</strong> | C. Giao thông. | D. Đào tạo." },

            // Slide 4: Trắc nghiệm Đúng/Sai đánh giá năng lực dịch vụ
            { slide: 4, type: "text", text: "<strong>Câu 4: Đánh giá tính Đúng/Sai về các dịch vụ điện tử:</strong>" },
            { slide: 4, type: "list", items: [
                "a) Gói cước truyền dữ liệu internet di động 4G là một sản phẩm tiêu biểu của dịch vụ viễn thông. <strong>(ĐÚNG)</strong>",
                "b) Việc học tập thông qua ứng dụng Zoom hay học liệu số không được coi là một dịch vụ điện tử. <strong>(SAI)</strong>",
                "c) Dịch vụ tài chính điện tử chỉ bao gồm việc chuyển khoản ngân hàng, không bao gồm mua bán trực tuyến. <strong>(SAI)</strong>"
            ]},

            // Slide 5: Trắc nghiệm trả lời ngắn (Form 2025)
            { slide: 5, type: "summary", title: "Câu hỏi dạng trả lời ngắn gọn", text: "<strong>Câu hỏi:</strong> Khách hàng sử dụng dịch vụ nền tảng nào của kĩ thuật điện tử để có thể nhắn tin SMS và thực hiện các cuộc gọi bằng thiết bị điện thoại di động thông minh?<br>-> <strong>Đáp án điền: Dịch vụ viễn thông</strong>" }
        ]
    },

    // ==========================================
    // BÀI 15: ĐIỆN TRỞ, TỤ ĐIỆN VÀ CUỘN CẢM
    // ==========================================
    {
        id: "cn12-bai-15",
        title: "Bài 15: Linh kiện thụ động R - L - C",
        blocks: [
            // Slide 1: Đơn vị đo lường linh kiện (Trọng tâm đề thi)
            { slide: 1, type: "definition", title: "Bản chất 3 linh kiện nền tảng", text: "Điện trở, tụ điện và cuộn cảm là các linh kiện thụ động cấu thành mọi mạch điện tử. Đơn vị đo lường quy chuẩn của chúng xuất hiện dày đặc trong tất cả các mã đề thi gốc:" },
            { slide: 1, type: "list", items: [
                "• <strong>Điện trở ($R$):</strong> Đặc trưng cho sự cản trở dòng điện. Đơn vị đo: <strong>Ohm ($\\Omega$)</strong>.",
                "• <strong>Tụ điện ($C$):</strong> Tích lũy năng lượng điện trường, chặn dòng một chiều DC. Đơn vị đo: <strong>Farad ($F$)</strong>.",
                "• <strong>Cuộn cảm ($L$):</strong> Tích lũy năng lượng từ trường, chặn dòng cao tần. Đơn vị đo: <strong>Henry ($H$)</strong>."
            ]},

            // Slide 2: Bài toán đọc giá trị Điện trở vòng màu
            { slide: 2, type: "text", text: "<strong>Dạng bài tập tính toán mã màu điện trở (Mã đề 0601):</strong>" },
            { slide: 2, type: "warning", title: "Bài toán 1: Xác định màu từ trị số cho trước", text: "Một điện trở bị mờ 2 vòng màu đầu, 2 vòng cuối là cam và nhũ vàng. Dùng đồng hồ đo được giá trị $27\\,\\text{k}\\Omega$. Tìm hai vòng màu đầu?<br><strong>Giải:</strong> Đổi $27\\,\\text{k}\\Omega = 27 \\times 10^3\\,\\Omega$.<br>• Chữ số thứ nhất là 2 $\\rightarrow$ Màu Đỏ.<br>• Chữ số thứ hai là 7 $\\rightarrow$ Màu Tím. (Vòng 3 là màu cam $10^3$, vòng 4 nhũ vàng $\\pm 5\\%$).<br>$\\Rightarrow$ <strong>Đáp án: Đỏ, tím.</strong>" },

            // Slide 3: Bài toán xuôi đọc vòng màu điện trở
            { slide: 3, type: "warning", title: "Bài toán 2: Xác định thứ tự vòng màu từ trị số", text: "Một điện trở có giá trị thực tế đo được là $560\\,\\Omega$, sai số $\\pm 5\\%$. Cần lựa chọn các vòng màu theo thứ tự nào?" },
            { slide: 3, type: "definition", title: "Lời giải áp dụng bảng quy ước mã màu", text: "• Chữ số thứ nhất là 5 $\\rightarrow$ Màu Lục.<br>• Chữ số thứ hai là 6 $\\rightarrow$ Màu Lam.<br>• Hệ số nhân là $10^1$ (vì $56 \\times 10^1 = 560$) $\\rightarrow$ Màu Nâu.<br>• Sai số $\\pm 5\\%$ $\\rightarrow$ Màu Nhũ vàng (Vàng kim).<br>$\\Rightarrow$ <strong>Thứ tự vòng màu: Lục, lam, nâu, nhũ vàng.</strong>" },

            // Slide 4: Thông số kĩ thuật & Cách kiểm tra linh kiện
            { slide: 4, type: "text", text: "<strong>Cách đọc thông số trên vỏ tụ điện và kiểm tra linh kiện (SGK):</strong>" },
            { slide: 4, type: "list", items: [
                "• Trên vỏ tụ gốm ghi thông số: $8,2\\,\\mu\\text{F} - 400\\,\\text{V}$. Trị số $400\\,\\text{V}$ chính là <strong>Điện áp định mức</strong> (Giới hạn điện áp lớn nhất tụ có thể chịu đựng an toàn mà không bị đánh thủng).",
                "• Quy trình kiểm tra bằng đồng hồ vạn năng (VOM): Điều chỉnh núm xoay về thang đo điện trở ($\\Omega$) để kiểm tra độ thông mạch của điện trở hoặc sự nạp xả của tụ điện."
            ]},

            // Slide 5: Kí hiệu linh kiện trên bản vẽ kĩ thuật
            { slide: 5, type: "summary", title: "Kỹ năng nhận diện qua hình ảnh đồ họa", text: "Học sinh cần thuộc lòng hình dạng kí hiệu trên sơ đồ mạch để làm câu hỏi nhận biết:<br>• Điện trở: Hình răng cưa hoặc hình chữ nhật thẳng.<br>• Tụ điện: Hai vạch thẳng song song tuyệt đối (Tụ hóa có thêm dấu + phân cực).<br>• Cuộn cảm: Hình các vòng cung mắc nối tiếp nhau tượng trưng cho cuộn dây." }
        ]
    },

    // ==========================================
    // BÀI 16: DIODE, TRANSISTOR VÀ MẠCH TÍCH HỢP IC
    // ==========================================
    {
        id: "cn12-bai-16",
        title: "Bài 16: Linh kiện bán dẫn chủ động",
        blocks: [
            // Slide 1: Nhận biết kí hiệu linh kiện bán dẫn
            { slide: 1, type: "definition", title: "Linh kiện bán dẫn chủ động", text: "Diode và Transistor cấu tạo từ các tiếp giáp bán dẫn P-N, đóng vai trò định hướng dòng điện và khuếch đại tín hiệu trong mạch xử lý." },
            { slide: 1, type: "list", items: [
                "• <strong>Diode (Điốt):</strong> Cấu tạo gồm 1 tiếp giáp P-N, có 2 cực Anode (A) và Cathode (K). Chỉ cho dòng điện chạy theo 1 chiều từ A sang K (Ứng dụng mạch chỉnh lưu).",
                "• <strong>Transistor (Trăng-zi-to):</strong> Linh kiện có 3 cực chính (B: Cực nền, C: Cực góp, E: Cực phát). Đóng vai trò bộ khuếch đại tín hiệu hoặc khóa điện tử đóng mở mạch."
            ]},

            // Slide 2: Câu hỏi nhận biết đồ họa trong đề thi tốt nghiệp
            { slide: 2, type: "text", text: "<strong>Dạng câu hỏi nhận biết kí hiệu xuất hiện phổ biến ở đề 0601 - 0648:</strong>" },
            { slide: 2, type: "warning", title: "Nhận biết Transistor trên sơ đồ (Mã đề 0602, 0648)", text: "Dấu hiệu nhận biết: Tìm linh kiện có cấu trúc 3 cực dẫn (B, C, E), tại cực phát (E) luôn bố trí một hình mũi tên chỉ hướng dòng điện (hướng ra ngoài là loại NPN, hướng vào trong là loại PNP)." },
            { slide: 2, type: "warning", title: "Nhận biết Diode trên sơ đồ (Mã đề 0601, 0603)", text: "Dấu hiệu nhận biết: Hình tam giác biểu thị cực Anode hướng thẳng vào một vạch chắn ngang biểu thị cực Cathode." },

            // Slide 3: Mạch tích hợp IC & Cơ chế phân loại
            { slide: 3, type: "text", text: "<strong>Kiến thức về Mạch tích hợp IC (Integrated Circuit):</strong>" },
            { slide: 3, type: "text", text: "Mạch tích hợp IC là tập hợp siêu mật độ gồm hàng triệu linh kiện bán dẫn siêu nhỏ trên một phiến silicon." },
            { slide: 3, type: "table", headers: ["Phân loại IC", "Mật độ tích hợp Transistor"], rows: [
                ["SSI (Mật độ nhỏ)", "Chứa vài chục linh kiện"],
                ["MSI (Mật độ trung bình)", "Chứa vài trăm linh kiện"],
                ["LSI (Mật độ lớn)", "Chứa hàng nghìn linh kiện"],
                ["VLSI (Mật độ rất lớn)", "Từ hàng trăm nghìn đến vài tỷ linh kiện (Chip CPU)"]
            ]},

            // Slide 4: Quy tắc đếm chân IC thực tế
            { slide: 4, type: "text", text: "<strong>Quy chuẩn kỹ thuật đọc sơ đồ chân IC (SGK):</strong>" },
            { slide: 4, type: "text", text: "Làm thế nào để xác định đúng thứ tự các chân của một IC dạng hai hàng chân (DIP) khi tiến hành lắp ráp mạch thực hành?" },
            { slide: 4, type: "warning", title: "Quy tắc đếm ngược chiều kim đồng hồ", text: "Nhìn IC từ mặt phía trên xuống: Chân số 1 luôn bắt đầu ngay sát phía có dấu định vị (Một chấm tròn nhỏ hoặc hốc khuyết hình bán nguyệt). Từ chân số 1, ta tiến hành đếm số thứ tự tăng dần <strong>ngược chiều kim đồng hồ</strong> cho đến chân cuối cùng." },

            // Slide 5: Quy trình bảo dưỡng kiểm tra IC bằng VOM
            { slide: 5, type: "summary", title: "Kỹ năng thực hành chẩn đoán lỗi bo mạch", text: "Để kiểm tra xem một IC trên bo mạch còn tốt hay đã hỏng, kỹ thuật viên chuyển đồng hồ vạn năng (VOM) về chế độ đo thông mạch (phát tiếng bíp). Tiến hành đo giữa các chân chức năng độc lập của IC, nếu đồng hồ liên tục phát ra tiếng 'bíp' ngắn mạch, chứng tỏ cấu trúc bán dẫn bên trong IC đã bị phá hủy hoàn toàn và cần thay thế." }
        ]
    },

    // ==========================================
    // BÀI 17: THỰC HÀNH: MẠCH PHÁT HIỆN DÒNG ĐIỆN XOAY CHIỀU TRONG DÂY DẪN
    // ==========================================
    {
        id: "cn12-bai-17",
        title: "Bài 17: Thực hành mạch cảm ứng dòng AC",
        blocks: [
            // Slide 1: Mục đích thực hành & Bản chất linh kiện
            { slide: 1, type: "definition", title: "Mục tiêu bài thực hành", text: "Lắp ráp và khảo sát mạch điện phát hiện sự tồn tại của dòng điện xoay chiều (AC) đang chạy bên trong dây dẫn điện thông qua hiện tượng cảm ứng từ trường mà không cần bóc vỏ cách điện tiếp xúc trực tiếp." },
            { slide: 1, type: "summary", title: "Linh kiện đóng vai trò cảm biến", text: "Trong sơ đồ mạch điện Bài 17 (Hình 17.1), linh kiện đóng vai trò là 'cảm biến' đầu vào để thu tín hiệu từ trường biến thiên chính là <strong>Cuộn cảm L</strong>." },

            // Slide 2: Nguyên lý hoạt động của mạch khuếch đại Darlington
            { slide: 2, type: "text", text: "<strong>Phân tích sơ đồ nguyên lý mạch điện cảm ứng (Hình 17.1):</strong>" },
            { slide: 2, type: "warning", title: "Cơ chế kích mở Transistor", text: "Mạch sử dụng 02 Transistor NPN mắc nối tiếp theo cấu trúc khuếch đại dòng dòng lớn. Khi đưa cuộn cảm L lại gần dây dẫn AC, từ trường biến thiên xung quanh dây dẫn cảm ứng lên cuộn cảm L một suất điện động nhỏ. Điện áp này kích mở cực B của transistor thứ nhất, dòng điện tiếp tục được khuếch đại đưa sang kích mở transistor thứ hai, tạo dòng qua điện trở hạn dòng $R_C$ làm đèn LED phát sáng." },

            // Slide 3: Trạng thái mạch khi không có dòng điện
            { slide: 3, type: "text", text: "<strong>Trạng thái tĩnh của mạch điện khi dây dẫn không có điện:</strong>" },
            { slide: 3, type: "text", text: "Khi không có dòng điện xoay chiều chạy qua dây dẫn, hiện tượng gì sẽ xảy ra với hệ thống linh kiện bán dẫn trên bo mạch?" },
            { slide: 3, type: "summary", title: "Trạng thái khóa dòng", text: "Không có từ trường biến thiên $\\rightarrow$ không có suất điện động cảm ứng trên cuộn cảm L $\\rightarrow$ cả hai Transistor đều ở trạng thái khóa hoàn toàn (Dòng cực góp $I_C = 0$) $\\rightarrow$ Đèn LED hoàn toàn không phát sáng." },

            // Slide 4: Trắc nghiệm Đúng/Sai phân tích quy trình lắp ráp
            { slide: 4, type: "text", text: "<strong>Câu hỏi Đúng/Sai đánh giá kỹ năng thực hành phòng thí nghiệm:</strong>" },
            { slide: 4, type: "list", items: [
                "a) Cuộn cảm L cần được bọc lớp băng keo cách điện dày và đặt cách thật xa dây nguồn để tránh nhiễu từ. <strong>(SAI - Phải đưa cuộn cảm lại sát vỏ dây dẫn để thu từ trường tốt nhất)</strong>",
                "b) Việc lắp ráp ngược cực tính dương/âm của đèn LED sẽ khiến đèn hoàn toàn không thể phát sáng dù mạch dẫn điện. <strong>(ĐÚNG)</strong>",
                "c) Mạch điện thực hành này sử dụng trực tiếp nguồn điện xoay chiều lưới 220 V để nuôi bo mạch. <strong>(SAI - Mạch dùng nguồn một chiều an toàn từ Pin 9V hoặc 12V)</strong>"
            ]},

            // Slide 5: Ảnh hưởng của linh kiện điện trở tải $R_C$
            { slide: 5, type: "summary", title: "Phân tích thông hiểu hỏng hóc lỗi mạch", text: "<strong>Tình huống:</strong> Nếu ta thay thế điện trở hạn dòng $R_C$ trong mạch bằng một điện trở khác có trị số quá lớn, hiện tượng gì xảy ra?<br><strong>Trả lời:</strong> Dòng điện chạy qua nhánh đèn LED sẽ bị cản trở mạnh và giảm nhỏ dưới mức định mức, dẫn đến hiện tượng đèn LED sẽ sáng cực kỳ yếu hoặc hoàn toàn không phát sáng khi mạch được kích mở." }
        ]
    },

    // ==========================================
    // BÀI 18: GIỚI THIỆU VỀ ĐIỆN TỬ TƯƠNG TỰ
    // ==========================================
    {
        id: "cn12-bai-18",
        title: "Bài 18: Điện tử tương tự (Analog)",
        blocks: [
            // Slide 1: Khái niệm biên độ liên tục & Đồ thị đề thi
            { slide: 1, type: "definition", title: "Bản chất tín hiệu Analog", text: "Tín hiệu tương tự (Analog) là tín hiệu có biên độ biến đổi liên tục theo thời gian (Ví dụ trong tự nhiên: Sóng âm thanh, nhiệt độ môi trường, cường độ ánh sáng)." },
            { slide: 1, type: "summary", title: "Dạng câu hỏi nhận biết đồ thị (Xuất hiện ở đề 0602, 0648)", text: "Đề thi cung cấp 4 hình vẽ đồ thị sóng khác nhau. Học sinh nhận diện đồ thị tín hiệu tương tự dựa vào đường cong uốn lượn liên tục không đứt gãy (Đồ thị hình sin của sóng điện áp hoặc sóng điều chế biên độ)." },

            // Slide 2: Phân loại mạch xử lý tín hiệu tương tự
            { slide: 2, type: "text", text: "<strong>Hệ thống các mạch xử lý tín hiệu tương tự cốt lõi (SGK):</strong>" },
            { slide: 2, type: "table", headers: ["Loại mạch tương tự", "Chức năng nhiệm vụ kỹ thuật"], rows: [
                ["Mạch khuếch đại biên độ", "Làm tăng biên độ điện áp hoặc công suất của tín hiệu tương tự đầu vào"],
                ["Mạch điều chế biên độ (AM)", "Trộn tín hiệu thông tin tần số thấp vào sóng mang cao tần để truyền đi xa"]
            ]},

            // Slide 3: Đối soát bẫy trắc nghiệm mạch số và mạch tương tự
            { slide: 3, type: "text", text: "<strong>Câu hỏi trắc nghiệm nhiều phương án lựa chọn (Tránh bẫy nhiễu):</strong>" },
            { slide: 3, type: "text", text: "<strong>Câu hỏi đề thi:</strong> Mạch điện tử nào dưới đây là mạch xử lí tín hiệu tương tự?<br>A. Mạch logic tổ hợp. | B. Mạch đếm sử dụng Flip-Flop. | C. Mạch so sánh cổng logic. | <strong>D. Mạch điều chế biên độ điện áp.</strong>" },
            { slide: 3, type: "warning", title: "Phân tích bẫy nhiễu", text: "Các phương án A, B, C đều thuộc về mạch điện tử số (Digital) sẽ học ở bài sau, tuyệt đối không chọn khi đề bài yêu cầu tìm mạch xử lý tín hiệu tương tự." },

            // Slide 4: Khảo sát hệ thống truyền âm thanh tương tự
            { slide: 4, type: "text", text: "<strong>Phân tích sơ đồ chuỗi truyền thông tương tự (Hình 18.6 SGK):</strong>" },
            { slide: 4, type: "list", items: [
                "• <strong>Microphone (Khối đầu vào):</strong> Thực hiện nhiệm vụ biến đổi sóng âm thanh (cơ học) của con người thành tín hiệu điện tương tự có cùng tần số.",
                "• <strong>Khối xử lý trung tâm:</strong> Gồm các linh kiện nền tảng: Điện trở, tụ điện, cuộn cảm, transistor kết hợp với bộ khuếch đại thuật toán (Op-Amp).",
                "• <strong>Loa (Khối đầu ra):</strong> Biến đổi ngược tín hiệu điện đã khuếch đại thành sóng âm truyền đến tai người nghe."
            ]},

            // Slide 5: Tại sao phải điều chế tín hiệu đi xa?
            { slide: 5, type: "summary", title: "Câu hỏi vận dụng giải trình kiến thức", text: "<strong>Câu hỏi:</strong> Tại sao trong kĩ thuật truyền thanh, người ta bắt buộc phải tiến hành điều chế biên độ khi muốn truyền tín hiệu âm thanh đi xa?<br><strong>Trả lời:</strong> Vì tín hiệu âm thanh con người phát ra có tần số rất thấp ($20\\,\\text{Hz} - 20\\,\\text{kHz}$), năng lượng yếu, khả năng bức xạ thành sóng điện từ để truyền trong không gian rất kém. Bắt buộc phải dùng mạch điều chế để 'gửi' tín hiệu này vào một sóng mang có tần số cao giúp truyền đi khoảng cách hàng nghìn km." }
        ]
    },

    // ==========================================
    // BÀI 19: KHUẾCH ĐẠI THUẬT TOÁN (OP-AMP)
    // ==========================================
    {
        id: "cn12-bai-19",
        title: "Bài 19: Khuếch đại thuật toán Op-Amp",
        blocks: [
            // Slide 1: Cấu trúc biểu tượng hình học Op-Amp
            { slide: 1, type: "definition", title: "Khái niệm IC Op-Amp", text: "Bộ khuếch đại thuật toán (Op-Amp) là một mạch tích hợp bán dẫn (Tiêu biểu là IC LM741) có hệ số khuếch đại điện áp cực kỳ lớn (lên tới $10^6$). Sơ đồ rút gọn của Op-Amp luôn có 2 ngõ vào chính và 1 ngõ ra:" },
            { slide: 1, type: "list", items: [
                "• Ngõ vào đảo (Kí hiệu dấu trừ $-$): Tín hiệu ra ngược pha $180^\\circ$ với tín hiệu vào.",
                "• Ngõ vào không đảo (Kí hiệu dấu cộng $+$): Tín hiệu ra cùng pha tuyệt đối với tín hiệu vào.",
                "• Chân ra (Output): Theo quy chuẩn chân IC LM741, chân ngõ ra là <strong>chân số 6</strong>."
            ]},

            // Slide 2: Công thức mạch khuếch đại Đảo & Không đảo
            { slide: 2, type: "text", text: "<strong>Trọng tâm công thức toán học tính điện áp ra $U_{ra}$ (Đề thi Tốt nghiệp):</strong>" },
            { slide: 2, type: "warning", title: "1. Mạch Khuếch đại Đảo (Nguồn vào cực $-$ qua $R_1$)", text: "Công thức đại số tính điện áp ngõ ra:<br>$$U_{ra} = -\\frac{R_2}{R_1} \\times U_{vào}$$ (Dấu âm thể hiện tín hiệu ngõ ra bị đảo pha $180^\\circ$ so với ngõ vào)." },
            { slide: 2, type: "warning", title: "2. Mạch Khuếch đại Không Đảo (Nguồn vào cực $+$)", text: "Công thức đại số tính điện áp ngõ ra:<br>$$U_{ra} = \\left(1 + \\frac{R_2}{R_1}\\right) \\times U_{vào}$$" },

            // Slide 3: Bài toán áp dụng tính toán thông số cụ thể
            { slide: 3, type: "text", text: "<strong>Bài tập mẫu áp dụng công thức tính toán điện áp:</strong>" },
            { slide: 3, type: "text", text: "<strong>Đề bài:</strong> Một mạch khuếch đại không đảo sử dụng Op-Amp có điện trở đầu vào $R_1 = 1\\,\\text{k}\\Omega$, điện trở hồi tiếp $R_2 = 10\\,\\text{k}\\Omega$. Nếu cấp điện áp ngõ vào $U_{vào} = 0,5\\,\\text{V}$, điện áp đo được ở ngõ ra $U_{ra}$ là bao nhiêu?" },
            { slide: 3, type: "definition", title: "Phương pháp thế số giải nhanh", text: "Áp dụng công thức mạch khuếch đại không đảo ở Slide 2:<br>$U_{ra} = \\left(1 + \\frac{R_2}{R_1}\\right) \\times U_{vào} = \\left(1 + \\frac{10}{1}\\right) \\times 0,5 = 11 \\times 0,5 = 5,5\\,\\text{V}$.<br><strong>Đáp án đúng: 5,5 V</strong>" },

            // Slide 4: Trắc nghiệm Đúng/Sai đánh giá ứng dụng Op-Amp
            { slide: 4, type: "text", text: "<strong>Câu hỏi trắc nghiệm Đúng/Sai phân tích hệ thống mạch Op-Amp:</strong>" },
            { slide: 4, type: "list", items: [
                "a) Mạch so sánh thuật toán dùng để so sánh biên độ trị số của hai dòng điện áp lối vào. <strong>(ĐÚNG)</strong>",
                "b) Trong mạch cộng đảo, điện áp ngõ ra tỉ lệ thuận với tổng các điện áp vào và hoàn toàn cùng pha với chúng. <strong>(SAI - Nó tỉ lệ với tổng nhưng ngược pha)</strong>",
                "c) Mạch trừ thuật toán thực hiện chức năng lấy hiệu hai tín hiệu điện đầu vào theo các hệ số trọng số điện trở. <strong>(ĐÚNG)</strong>"
            ]},

            // Slide 5: Trả lời ngắn - Tính hệ số khuếch đại tuyệt đối
            { slide: 5, type: "summary", title: "Câu hỏi trả lời ngắn (Form mới)", text: "<strong>Câu hỏi:</strong> Một mạch khuếch đại đảo có cấu trúc điện trở đầu vào $R_1 = 2\\,\\text{k}\\Omega$ và điện trở đường hồi tiếp $R_2 = 10\\,\\text{k}\\Omega$. Hãy tính trị số hệ số khuếch đại điện áp $G$ của mạch (Chỉ lấy trị số tuyệt đối)?<br><strong>Giải nhanh:</strong> Hệ số khuếch đại tuyệt đối $|G| = \\frac{R_2}{R_1} = \\frac{10}{2} = 5$.<br>  <strong>Đáp án điền: 5</strong>" }
        ]
    },
    // ==========================================
    // BÀI 20: THỰC HÀNH: MẠCH KHUẾCH ĐẠI ĐẢO
    // ==========================================
    {
        id: "cn12-bai-20",
        title: "Bài 20: Thực hành mạch khuếch đại đảo",
        blocks: [
            // Slide 1: Mục tiêu thực hành & Cấu hình chân chân IC
            { slide: 1, type: "definition", title: "Nội dung thực hành", text: "Tiến hành lắp ráp hoàn chỉnh bo mạch khuếch đại đảo sử dụng linh kiện cốt lõi là IC Op-Amp LM741, thực hiện đo đạc kiểm thử thông số điện áp thực tế so với lý thuyết." },
            { slide: 1, type: "summary", title: "Cấu hình hàng chân chân kết nối", text: "Theo sơ đồ nguyên lý chuẩn hóa của bài thực hành:<br>• Chân số 2: Lối vào đảo (Nối với nguồn điện áp khảo sát $U_{vào}$ qua điện trở $R_1$).<br>• Chân số 3: Lối vào không đảo (Nối trực tiếp xuống đất - Ground).<br>• Chân số 6: Ngõ ra tín hiệu ($U_{ra}$)." },

            // Slide 2: Công thức cốt lõi & Cặp điện trở thực hành
            { slide: 2, type: "text", text: "<strong>Thông số linh kiện quy chuẩn trong bài thực hành SGK:</strong>" },
            { slide: 2, type: "warning", title: "Trị số linh kiện phòng thí nghiệm", text: "Bài thực hành sử dụng cặp điện trở chuẩn: Điện trở ngõ vào $R_1 = 1\\,\\text{k}\\Omega$, điện trở hồi tiếp song song $R_2 = 2,2\\,\\text{k}\\Omega$ nối giữa chân số 6 và chân số 2." },
            { slide: 2, type: "definition", title: "Hàm toán học vận hành mạch", text: "Điện áp ngõ ra khảo sát tuân thủ chặt chẽ công thức đảo pha:<br>$$U_{ra} = -\\frac{R_2}{R_1} \\times U_{vào} = -\\frac{2,2}{1} \\times U_{vào} = -2,2 \\times U_{vào}$$" },

            // Slide 3: Kịch bản đề thi mẫu Phần II (Đúng/Sai thực hành)
            { slide: 3, type: "text", text: "<strong>Tình huống đề thi tốt nghiệp trích xuất từ kịch bản bài 20:</strong><br>Cấp điện áp một chiều $U_{vào} = +1\\,\\text{V}$ vào mạch thực hành Op-Amp đảo có $R_1 = 1\\,\\text{k}\\Omega, R_2 = 2,2\\,\\text{k}\\Omega$." },
            { slide: 3, type: "list", items: [
                "a) Điện áp ngõ ra của mạch thực hành tính toán theo lý thuyết đạt trị số $U_{ra} = -2,2\\,\\text{V}$. <strong>(ĐÚNG - Vì $-2,2 \\times 1 = -2,2\\text{V}$)</strong>",
                "b) Nếu ta tiến hành đảo ngược cực tính nguồn cấp ở ngõ vào ($U_{vào} = -1\\,\\text{V}$), điện áp ngõ ra lập tức nhảy lên trị số dương $+2,2\\,\\text{V}$. <strong>(ĐÚNG - Do tích của hai dấu âm thành dấu dương)</strong>",
                "c) Nếu thay thế điện trở hồi tiếp $R_2$ bằng loại điện trở có trị số $2\\,\\text{k}\\Omega$ (Giữ nguyên $U_{vào} = 1\\text{V}$), thì trị số điện áp ra đo được xấp xỉ $-3\\,\\text{V}$. <strong>(SAI - Vì lúc này $U_{ra} = -\\frac{2}{1} \\times 1 = -2\\,\\text{V}$)</strong>"
            ]},

            // Slide 4: Kỹ năng đọc đồng hồ VOM chẩn đoán sai số
            { slide: 4, type: "text", text: "<strong>Giải trình khoa học về sai số giữa thực tế và lý thuyết:</strong>" },
            { slide: 4, type: "text", text: "Tại sao khi học sinh dùng đồng hồ vạn năng VOM đo điện áp thực tế tại chân số 6, kết quả thường có sai số lệch một vài phần trăm so với trị số tính toán trên giấy?" },
            { slide: 4, type: "summary", title: "Nguyên nhân kỹ thuật", text: "Do tác động tổng hợp từ: Sai số chế tạo của bản thân các vòng màu điện trở (thường là $\\pm 5\\%$); nội trở của chính đồng hồ vạn năng VOM gây sụt áp nhẹ khi đo; và đặc tính dòng điện không lý tưởng của IC thuật toán Op-Amp trong môi trường nhiệt độ phòng thực hành." },

            // Slide 5: Tóm tắt kỹ năng thực hành cần đạt
            { slide: 5, type: "summary", title: "Kỹ năng làm bài trắc nghiệm nhanh", text: "Để xử lý hoàn hảo các câu hỏi trắc nghiệm liên quan đến bài thực hành 20, học sinh cần ghi nhớ: Luôn dùng thang đo điện áp một chiều (DCV) trên đồng hồ vạn năng, que đen cắm cực đất (chân 3), que đỏ đo lần lượt chân 2 ($U_{vào}$) và chân 6 ($U_{ra}$)." }
        ]
    },

    // ==========================================
    // BÀI 21: TÍN HIỆU SỐ VÀ CÁC CỔNG LOGIC CƠ BẢN
    // ==========================================
    {
        id: "cn12-bai-21",
        title: "Bài 21: Tín hiệu số và Cổng logic",
        blocks: [
            // Slide 1: Khái niệm tín hiệu số & 3 Cổng logic nền tảng
            { slide: 1, type: "definition", title: "Bản chất tín hiệu Digital", text: "Tín hiệu số là chuỗi tín hiệu rời rạc hóa, chỉ tồn tại ở hai mức trạng thái logic cố định: Mức logic cao (Kí hiệu số 1) và Mức logic thấp (Kí hiệu số 0). Đại số Boole quy chuẩn 3 cổng logic cơ bản:" },
            { slide: 1, type: "list", items: [
                "• <strong>Cổng NOT (Cổng Đảo):</strong> Ngõ ra luôn ngược trạng thái ngõ vào ($Y = \\bar{X}$). Kí hiệu đồ họa: Hình tam giác có vòng tròn nhỏ ở đầu ra.",
                "• <strong>Cổng AND (Cổng VÀ):</strong> Ngõ ra chỉ bằng 1 khi và chỉ khi mọi ngõ vào đồng thời nhận mức 1 ($Y = X_1 \\cdot X_2$).",
                "• <strong>Cổng OR (Cổng HOẶC):</strong> Ngõ ra bằng 1 khi có ít nhất một ngõ vào nhận mức 1 ($Y = X_1 + X_2$)."
            ]},

            // Slide 2: Đọc kí hiệu và tính trạng thái mạch logic tổ hợp
            { slide: 2, type: "text", text: "<strong>Dạng bài tập tính toán trạng thái ngõ ra mạch logic tổ hợp (Đề thi):</strong>" },
            { slide: 2, type: "warning", title: "Kịch bản khảo sát trạng thái 1", text: "Cho một mạch logic gồm hai ngõ vào hệ thống $X_1 = 1$ và $X_2 = 1$. Lần lượt cho chạy qua cổng AND tạo lối ra trung gian $M$, sau đó đưa $M$ qua cổng NOT tạo lối ra tổng thể $Y$. Xác định trạng thái của $M$ và $Y$?<br>• Bước 1: Qua cổng AND $\\rightarrow M = X_1 \\cdot X_2 = 1 \\cdot 1 = 1$.<br>• Bước 2: Qua cổng NOT $\\rightarrow Y = \\bar{M} = \\bar{1} = 0$.<br>$\\Rightarrow$ <strong>Đáp án đúng: $M = 1$ và $Y = 0$.</strong>" },

            // Slide 3: Kịch bản khảo sát mạch số 2
            { slide: 3, type: "warning", title: "Kịch bản khảo sát trạng thái 2", text: "Giữ nguyên cấu trúc mạch logic tổ hợp ở slide trước, tiến hành thay đổi trạng thái hai lối vào ban đầu thành $X_1 = 0$ và $X_2 = 1$. Xác định lại giá trị $M$ và $Y$?" },
            { slide: 3, type: "definition", title: "Các bước tính nhanh", text: "• Bước 1: Do có một ngõ vào bằng 0, qua cổng AND ngõ ra trung gian lập tức nhận mức thấp $\\rightarrow M = 0 \\cdot 1 = 0$.<br>• Bước 2: Tín hiệu $M=0$ đi qua cổng NOT đảo trạng thái $\\rightarrow Y = \\bar{0} = 1$.<br>$\\Rightarrow$ <strong>Đáp án đúng: $M = 0$ và $Y = 1$.</strong>" },

            // Slide 4: Tình huống thực tế Đúng/Sai - Mạch chiếu sáng thông minh
            { slide: 4, type: "text", text: "<strong>Ứng dụng thiết kế mạch đèn thông minh dùng cổng logic (Phần II đề thi):</strong><br>Mạch gồm mô đun cảm biến ánh sáng ($X_1$) và cảm biến chuyển động ($X_2$) nối qua khối logic để điều khiển bóng đèn ($Y$). Yêu cầu kỹ thuật: Đèn chỉ được phép bật sáng khi trời tối đồng thời có người đến gần." },
            { slide: 4, type: "list", items: [
                "a) Cổng logic đáp ứng hoàn hảo yêu cầu kỹ thuật trên (chỉ sáng khi cả hai điều kiện đồng thời thỏa mãn) là cổng AND. <strong>(ĐÚNG)</strong>",
                "b) Nếu ta sử dụng cổng logic OR cho mạch điều khiển, bóng đèn sẽ bật sáng khi ít nhất một trong hai cảm biến xuất mức logic 1. <strong>(ĐÚNG)</strong>",
                "c) Nếu hệ thống sử dụng cổng logic NOR, bóng đèn sẽ tự động bật sáng khi trời sáng đồng thời có người bước đến gần. <strong>(SAI)</strong>"
            ]},

            // Slide 5: Kí hiệu cổng mở rộng (NAND / NOR)
            { slide: 5, type: "summary", title: "Mở rộng kiến thức nhận biết kí hiệu", text: "Học sinh cần phân biệt rõ kí hiệu đồ họa quốc tế của cổng mở rộng để xử lý câu hỏi trắc nghiệm nhanh:<br>• Cổng NAND: Thân cổng AND có thêm vòng tròn nhỏ ở đầu ngõ ra.<br>• Cổng NOR: Thân cổng OR có thêm vòng tròn nhỏ ở đầu ngõ ra." }
        ]
    },

    // ==========================================
    // BÀI 22: MỘT SỐ MẠCH XỬ LÍ TÍN HIỆU TRONG ĐIỆN TỬ SỐ
    // ==========================================
    {
        id: "cn12-bai-22",
        title: "Bài 22: Các mạch xử lý điện tử số",
        blocks: [
            // Slide 1: Phân biệt Mạch logic Tổ hợp & Mạch Dãy
            { slide: 1, type: "definition", title: "Hai nhóm mạch số cốt lõi", text: "Dựa vào đặc tính bộ nhớ, mạch xử lý điện tử số được phân chia làm hai nhóm kiến trúc lớn:" },
            { slide: 1, type: "table", headers: ["Loại mạch số", "Đặc điểm phụ thuộc trạng thái ngõ ra", "Mạch tiêu biểu ứng dụng"], rows: [
                ["Mạch logic tổ hợp", "Chỉ phụ thuộc vào trạng thái ngõ vào tại chính thời điểm đó (Không có bộ nhớ)", "Mạch mã hóa, mạch giải mã led 7 đoạn, mạch cộng nhị phân"],
                ["Mạch dãy (Mạch tuần tự)", "Phụ thuộc vào ngõ vào hiện tại và trạng thái lưu trữ trước đó (Có bộ nhớ)", "Mạch đếm xung, bộ ghi dịch, các khối chip nhớ RAM/ROM"]
            ]},

            // Slide 2: Linh kiện Flip-Flop D (Tế bào bộ nhớ)
            { slide: 2, type: "text", text: "<strong>Linh kiện nền tảng cấu thành mạch dãy (Trọng tâm đề thi):</strong>" },
            { slide: 2, type: "warning", title: "Flip-Flop D (Trigger)", text: "Được coi là 'tế bào' cơ bản nhất để xây dựng các mạch dãy phức tạp. Flip-Flop D có khả năng lưu trữ tĩnh 1 bit thông tin nhị phân và chỉ tiến hành chuyển đổi trạng thái logic khi có tín hiệu xung nhịp kích hoạt đánh vào chân điều khiển kí hiệu là CLK (Clock)." },
            { slide: 2, type: "summary", title: "Câu hỏi đối soát đề thi tốt nghiệp (Mã đề 0601)", text: "Mạch điện tử nào dưới đây là một ví dụ điển hình của mạch xử lí tín hiệu số (mạch dãy)?<br>A. Mạch điều chế biên độ. | <strong>B. Mạch đếm sử dụng Flip-Flop.</strong><br>C. Mạch khuếch đại không đảo. | D. Mạch chỉnh lưu cầu." },

            // Slide 3: Bài toán tính trạng thái tối đa của bộ đếm nhị phân
            { slide: 3, type: "text", text: "<strong>Công thức toán học tính dung lượng trạng thái mạch dãy:</strong>" },
            { slide: 3, type: "text", text: "Một bộ đếm nhị phân sử dụng $n$ linh kiện Flip-Flop mắc nối tiếp liên tục với nhau sẽ có khả năng quản lý và đếm được tối đa bao nhiêu trạng thái giá trị thập phân?" },
            { slide: 3, type: "warning", title: "Công thức lũy thừa cơ số 2", text: "Tổng số trạng thái logic mạch có thể biểu diễn được tính bằng công thức: $$N = 2^n$$<br>• Nếu mạch đếm dùng 2 Flip-Flop (Hình 22.8) $\\rightarrow N = 2^2 = 4$ trạng thái (Đếm dải số từ 0 đến 3).<br>• Nếu mạch đếm dùng 3 Flip-Flop $\\rightarrow N = 2^3 = 8$ trạng thái (Đếm dải số thập phân từ 0 đến 7)." },

            // Slide 4: Trắc nghiệm Đúng/Sai khảo sát bài 22
            { slide: 4, type: "text", text: "<strong>Câu hỏi trắc nghiệm Đúng/Sai đánh giá lý thuyết nâng cao:</strong>" },
            { slide: 4, type: "list", items: [
                "a) Mạch so sánh hai số nhị phân 1 bit thuộc loại mạch dãy vì có khả năng ghi nhớ kết quả so sánh trước đó. <strong>(SAI - Là mạch logic tổ hợp)</strong>",
                "b) Mạch đếm nhị phân được dùng rộng rãi để đếm số lượng sản phẩm, chia tần số hoặc làm bộ định thời trong CPU máy tính. <strong>(ĐÚNG)</strong>",
                "c) Biểu thức hàm ngõ ra của mạch logic tổ hợp (Hình 22.2) có thể biến đổi thành mạch dãy nếu ta tích hợp thêm một phần tử nhớ Flip-Flop vào đường hồi tiếp. <strong>(ĐÚNG)</strong>"
            ]},

            // Slide 5: Trả lời ngắn về phương trình mạch so sánh
            { slide: 5, type: "summary", title: "Câu hỏi thông hiểu - Trả lời ngắn", text: "Trong mạch so sánh hai số nhị phân 1 bit gồm hai biến đầu vào $A$ và $B$. Nếu trạng thái ngõ ra báo mức $C=1$ khi $A$ bằng $B$, phương trình đại số logic chuẩn xác đại diện cho mạch là:<br>  <strong>Đáp án điền: $C = \\bar{A}\\bar{B} + AB$</strong>" }
        ]
    },

    // ==========================================
    // BÀI 23: THỰC HÀNH: LẮP RÁP, KIỂM TRA MẠCH BÁO CHÁY SỬ DỤNG CÁC CỔNG LOGIC CƠ BẢN
    // ==========================================
    {
        id: "cn12-bai-23",
        title: "Bài 23: Thực hành mạch báo cháy dùng cổng logic",
        blocks: [
            // Slide 1: Khối đầu vào & Cơ cấu chấp hành
            { slide: 1, type: "definition", title: "Cấu trúc sơ đồ khối mạch báo cháy", text: "Mạch thực hành báo cháy ứng dụng (Hình 23.1) được phân định rõ ràng thành các phân khối kỹ thuật chức năng:" },
            { slide: 1, type: "list", items: [
                "• <strong>Khối đầu vào (Inputs):</strong> Gồm mô đun cảm biến khói và mô đun cảm biến nhiệt độ làm nhiệm vụ thu thập tín hiệu môi trường.",
                "• <strong>Khối xử lý logic trung tâm:</strong> Sử dụng tích hợp các cổng logic cơ bản AND, OR, NOT.",
                "• <strong>Cơ cấu chấp hành đầu ra (Outputs):</strong> Còi phát tín hiệu báo động âm thanh và đèn LED phát tín hiệu cảnh báo ánh sáng."
            ]},

            // Slide 2: Nguyên lý điều khiển phân cấp thiết bị đầu ra
            { slide: 2, type: "text", text: "<strong>Tại sao còi báo động nối cổng OR còn đèn LED nguy hiểm nối cổng AND?</strong>" },
            { slide: 2, type: "warning", title: "Logic vận hành an toàn hệ thống", text: "• Còi báo động được đấu nối với ngõ ra của cổng OR để tối ưu hóa khả năng cảnh báo sớm: Chỉ cần ít nhất một trong hai nguy cơ xuất hiện (Hoặc có khói hoặc nhiệt độ tăng cao đột ngột) là còi lập tức hú báo động.<br>• Đèn LED cảnh báo nguy hiểm cực độ được đấu nối với ngõ ra của cổng AND: Đèn chỉ bật sáng khi và chỉ khi cả hai yếu tố khói và nhiệt độ đồng thời vượt ngưỡng, chỉ thị tình huống cháy nổ mức độ nghiêm trọng." },

            // Slide 3: Vai trò cổng Đảo NOT trong mạch thực tế
            { slide: 3, type: "text", text: "<strong>Vai trò kỹ thuật đặc biệt của cổng NOT trong sơ đồ Hình 23.1:</strong>" },
            { slide: 3, type: "text", text: "Một số mô đun cảm biến nhiệt độ thương mại trên thị trường có đặc tính kỹ thuật là tự động kéo điện áp ngõ ra xuống mức thấp (Logic 0) khi phát hiện nhiệt độ cao. Làm thế nào để phối hợp tín hiệu này với cổng logic?" },
            { slide: 3, type: "summary", title: "Giải pháp đảo trạng thái kích hoạt", text: "Cổng NOT được chèn vào ngay sau cảm biến nhiệt độ để thực hiện nhiệm vụ đảo mức logic 0 (Khi có nhiệt) thành mức logic 1, đồng bộ dạng tín hiệu kích hoạt mức cao đưa vào các cổng AND và OR phía sau xử lý chuẩn xác." },

            // Slide 4: Trắc nghiệm Đúng/Sai dựa trên bảng kiểm thử 23.1
            { slide: 4, type: "text", text: "<strong>Phân tích trạng thái hoạt động mạch báo cháy (Bảng dữ liệu thực hành 23.1):</strong>" },
            { slide: 4, type: "list", items: [
                "a) Trong điều kiện thử nghiệm phòng thí nghiệm: Có khói bay vào cảm biến nhưng nhiệt độ môi trường bình thường $\\rightarrow$ Trạng thái hệ thống là Còi kêu (Mức 1) và Đèn LED không sáng (Mức 0). <strong>(ĐÚNG)</strong>",
                "b) Nếu người thợ tiến hành thay thế cổng logic OR bằng cổng AND cho nhánh còi báo động, còi của hệ thống sẽ hoạt động nhạy hơn rất nhiều. <strong>(SAI - Còi sẽ cực kỳ khó kêu vì bắt buộc phải thỏa mãn cả 2 điều kiện cùng lúc)</strong>",
                "c) Mạch thực hành điều khiển số này sử dụng nguồn điện xoay chiều một pha lưới 220 V cấp trực tiếp cho bo mạch cắm chân rết. <strong>(SAI - Sử dụng nguồn DC pin 9V thấp áp để an toàn thực hành)</strong>"
            ]},

            // Slide 5: Trắc nghiệm khách quan nhiều lựa chọn
            { slide: 5, type: "text", text: "<strong>Câu hỏi nhận biết trích xuất từ kịch bản thi thực hành logic:</strong>" },
            { slide: 5, type: "text", text: "Trong sơ đồ mạch báo cháy dùng cổng logic, linh kiện nào đóng vai trò là cơ cấu chấp hành để phát ra tín hiệu cảnh báo bằng âm thanh?<br>A. Đèn LED. | B. Cổng logic AND. | <strong>C. Còi báo động.</strong> | D. Cảm biến khói." }
        ]
    },

    // ==========================================
    // BÀI 24: KHÁI QUÁT VỀ VI ĐIỀU KHIỂN
    // ==========================================
    {
        id: "cn12-bai-24",
        title: "Bài 24: Khái quát về vi điều khiển",
        blocks: [
            // Slide 1: Khái niệm & Trọng tâm đề thi tốt nghiệp tốt nghiệp
            { slide: 1, type: "definition", title: "Định nghĩa máy tính đơn chip", text: "Vi điều khiển (Microcontroller) là một máy tính thu nhỏ được đóng gói tích hợp toàn bộ trên một chip vi mạch bán dẫn đơn độc. Trọng tâm xuất hiện trong bộ đề thi tốt nghiệp quốc gia (0601 - 0648) tập trung vào nhận biết chức năng của các khối bên trong chip." },
            { slide: 1, type: "list", items: [
                "• <strong>Bộ xử lý trung tâm (CPU):</strong> Đóng vai trò là 'não bộ' điều khiển, thực hiện các phép tính toán số học, logic và điều phối toàn bộ hoạt động.",
                "• <strong>Khối bộ nhớ:</strong> Nơi lưu trữ thông tin hệ thống, gồm 2 thành phần kinh điển là ROM và RAM."
            ]},

            // Slide 2: Phân biệt bản chất bộ nhớ ROM và RAM (Đề thi)
            { slide: 2, type: "text", text: "<strong>Bảng đối soát chức năng khối bộ nhớ vi điều khiển (Câu hỏi chắc chắn xuất hiện):</strong>" },
            { slide: 2, type: "table", headers: ["Loại bộ nhớ", "Tính chất lưu trữ dữ liệu khi ngắt điện", "Nhiệm vụ trong vi điều khiển"], rows: [
                ["ROM (Read-Only Memory)", "Dữ liệu <strong>không bị mất đi</strong> khi mất nguồn nuôi", "Lưu trữ vĩnh viễn chương trình code điều khiển nhúng của chip"],
                ["RAM (Random Access Memory)", "Dữ liệu <strong>bị xóa sạch hoàn toàn</strong> khi mất điện", "Lưu trữ các biến số, dữ liệu tính toán tạm thời của CPU"]
            ]},

            // Slide 3: Khối vào ra ngoại vi (I/O) và Hệ thống xe buýt dữ liệu
            { slide: 3, type: "text", text: "<strong>Vai trò của Khối Vào/Ra và Hệ thống Bus (Hình 24.5 SGK):</strong>" },
            { slide: 3, type: "list", items: [
                "• <strong>Khối vào/ra ngoại vi (I/O Ports):</strong> Thực hiện nhiệm vụ kết nối, giao tiếp và phối hợp tín hiệu giữa vi điều khiển với các linh kiện bên ngoài (Nút bấm, cảm biến, đèn LED, động cơ).",
                "• <strong>Hệ thống Bus (Xe buýt truyền tải):</strong> Tập hợp các đường dây dẫn siêu nhỏ dùng để luân chuyển tín hiệu giữa các khối nội tại, chia làm 3 loại: Bus dữ liệu, Bus địa chỉ và Bus điều khiển."
            ]},

            // Slide 4: Câu hỏi tính toán thời gian chu kì xung nhịp CPU
            { slide: 4, type: "text", text: "<strong>Bài toán vận dụng tính toán thông số kỹ thuật tần số thạch anh:</strong>" },
            { slide: 4, type: "text", text: "<strong>Đề bài:</strong> Một vi điều khiển tích hợp trong nồi cơm điện thông minh có bộ xử lý trung tâm (CPU) hoạt động ở tần số xung nhịp định mức $f = 1\\,\\text{MHz}$. Hỏi thời gian thực thi của một nhịp xung lệnh CPU kéo dài bao nhiêu giây?" },
            { slide: 4, type: "definition", title: "Lời giải áp dụng công thức chu kỳ tần số", text: "Chu kỳ thời gian $T$ tỉ lệ nghịch với tần số hoạt động $f$:<br>$$T = \\frac{1}{f} = \\frac{1}{1.000.000\\,\\text{Hz}} = 10^{-6}\\,\\text{giây}$$ (Tương đương trị số thời gian là 1 micro giây).<br><strong>Đáp án đúng: $10^{-6}$ giây</strong>" },

            // Slide 5: Trắc nghiệm khách quan từ ngân hàng đề thi
            { slide: 5, type: "text", text: "<strong>Câu hỏi nhận biết cốt lõi trong đề thi tốt nghiệp THPT:</strong>" },
            { slide: 5, type: "text", text: "<strong>Câu 1:</strong> Bộ nhớ ROM và bộ nhớ RAM là hai thành phần cốt lõi nằm ở phân khối chức năng nào của cấu trúc vi điều khiển?<br>A. Khối xử lý CPU. | B. Khối vào/ra ngoại vi. | <strong>C. Khối bộ nhớ.</strong> | D. Hệ thống Bus dẫn." },
            { slide: 5, type: "text", text: "<strong>Câu 2:</strong> Thành phần nào trên bo mạch vi điều khiển của máy giặt được lập trình để tính toán và xuất lệnh tự động điều khiển quy trình vắt và xả?<br><strong>A. Bộ xử lý trung tâm (CPU).</strong> | B. Khối bộ nhớ RAM. | C. Khối Bus địa chỉ. | D. Cổng vào I/O." }
        ]
    },

    // ==========================================
    // BÀI 25: BO MẠCH LẬP TRÌNH VI ĐIỀU KHIỂN
    // ==========================================
    {
        id: "cn12-bai-25",
        title: "Bài 25: Bo mạch lập trình vi điều khiển",
        blocks: [
            // Slide 1: 5 Khối chức năng trên bo mạch phần cứng Arduino
            { slide: 1, type: "definition", title: "Cấu trúc bo mạch lập trình", text: "Bo mạch lập trình (Tiêu biểu là hệ sinh thái phần cứng mở Arduino Uno R3 sử dụng chip trung tâm ATmega328P họ AVR) tích hợp sẵn các khối linh kiện hỗ trợ tối ưu:" },
            { slide: 1, type: "list", items: [
                "• Khối nguồn: Biến đổi điện áp ngoài (Pin, Adapter) thành mức áp chuẩn 5V ổn định nuôi chip.",
                "• Khối truyền thông: IC trung gian kết nối giao tiếp UART-USB để nạp code từ máy tính.",
                "• Khối dao động (Thạch anh): Phát chuỗi xung tuần hoàn đồng bộ tốc độ xử lý.",
                "• Khối tín hiệu vào/ra: Các hàng chân cắm cắm linh kiện ngoại vi dễ dàng."
            ]},

            // Slide 2: Quy trình 3 bước lập trình nhúng phần mềm
            { slide: 2, type: "text", text: "<strong>Trình tự các bước nạp chương trình phần mềm vào vi điều khiển (Hình 25.7):</strong>" },
            { slide: 2, type: "list", items: [
                "• <strong>Bước 1: Lập trình bậc cao:</strong> Kỹ sư viết mã nguồn điều khiển hệ thống bằng ngôn ngữ phần mềm bậc cao (Thường sử dụng ngôn ngữ C hoặc C++) trên máy tính thông qua phần mềm chỉnh sửa (Arduino IDE).",
                "• <strong>Bước 2: Biên dịch và nạp mã máy:</strong> Phần mềm tiến hành dịch mã nguồn thành mã nhị phân máy (Mã Hex) rồi truyền nạp thẳng vào bộ nhớ Flash của vi điều khiển thông qua cáp USB.",
                "• <strong>Bước 3: Thực thi hệ thống:</strong> Cấp điện và chip vi điều khiển tự động chạy mã lệnh để quản lý thiết bị ngoại vi."
            ]},

            // Slide 3: Kỹ năng xử lý thay đổi sơ đồ chân lập trình (SGK)
            { slide: 3, type: "text", text: "<strong>Câu hỏi khám phá tư duy thiết kế phần cứng điều khiển:</strong>" },
            { slide: 3, type: "text", text: "<strong>Tình huống 1 (Hình 25.5):</strong> Nếu muốn chuyển đổi dây tín hiệu của mạch cảm biến từ cổng tương tự A2 sang cắm ở cổng tương tự A0 trên bo mạch Arduino, ta cần xử lý như thế nào để mạch hoạt động?" },
            { slide: 3, type: "warning", title: "Giải pháp đồng bộ phần mềm và phần cứng", text: "Học sinh bắt buộc phải tiến hành thực hiện hai thao tác đồng thời: Rút chân cắm vật lý từ vị trí cổng A2 chuyển sang cắm vào cổng A0 trên bo mạch, đồng thời phải mở mã nguồn chương trình (code) trên máy tính sửa lại dòng lệnh khai báo chân cấu hình biến đầu vào từ trị số kí hiệu A2 chuyển thành A0, tiến hành biên dịch và nạp lại chương trình vào chip." },

            // Slide 4: Logic xuất tín hiệu điều khiển bật tắt LED
            { slide: 4, type: "text", text: "<strong>Tình huống 2 (Hình 25.6 - Logic điều khiển thiết bị):</strong>" },
            { slide: 4, type: "text", text: "Nếu muốn ra lệnh bật sáng một đèn LED đang kết nối với chân số 9 của mạch điều khiển Arduino, ta cần xuất giá trị trạng thái nhị phân nào ra cổng?" },
            { slide: 4, type: "summary", title: "Nguyên lý điện áp logic mức cao", text: "Cần lập trình xuất giá trị logic mức cao (Giá trị số 1 hoặc lệnh HIGH) ra chân số 9. Trạng thái này lệnh cho vi điều khiển cấp mức điện áp nguồn chuẩn +5 V ra chân, tạo dòng chạy qua điện trở hạn dòng kích đèn LED phát sáng rực rỡ." },

            // Slide 5: Trắc nghiệm khách quan mô phỏng cấu trúc thi
            { slide: 5, type: "text", text: "<strong>Câu hỏi trắc nghiệm nhiều phương án lựa chọn:</strong>" },
            { slide: 5, type: "text", text: "<strong>Câu 1:</strong> Ngôn ngữ lập trình phổ biến nhất được sử dụng rộng rãi để viết mã nguồn cho các bo mạch lập trình vi điều khiển tiêu chuẩn hiện nay là:<br>A. Pascal. | <strong>B. Ngôn ngữ C / C++.</strong> | C. Assembly. | D. HTML số." },
            { slide: 5, type: "text", text: "<strong>Câu 2:</strong> Khối chức năng nào thực hiện nhiệm vụ biến đổi dải điện áp không ổn định từ nguồn cấp ngoài thành mức áp chuẩn ổn định nuôi mạch vi điều khiển?<br><strong>A. Khối nguồn ổn áp.</strong> | B. Khối dao động thạch anh. | C. Khối truyền thông. | D. Khối chân ra ngoại vi." }
        ]
    },

    // ==========================================
    // BÀI 26: THỰC HÀNH: THIẾT KẾ, LẮP RÁP, KIỂM TRA MẠCH TỰ ĐỘNG ĐIỀU CHỈNH CƯỜNG ĐỘ SÁNG CỦA LED THEO MÔI TRƯỜNG XUNG QUANH
    // ==========================================
    {
        id: "cn12-bai-26",
        title: "Bài 26: Thực hành mạch đèn thông minh điều khiển LED",
        blocks: [
            // Slide 1: Linh kiện cảm biến ánh sáng LDR
            { slide: 1, type: "definition", title: "Mục tiêu bài thực hành tổng hợp", text: "Thiết kế, kết nối phần cứng và viết chương trình hoàn chỉnh cho hệ thống tự động điều chỉnh độ sáng đèn LED dựa trên cường độ ánh sáng môi trường thực tế (Mô hình hóa hệ thống đèn đường thông minh)." },
            { slide: 1, type: "summary", title: "Linh kiện thu thập tín hiệu đầu vào", text: "Theo sơ đồ nguyên lý Hình 26.1, linh kiện giữ vai trò mắt thần cảm biến nhận biết độ sáng tối của môi trường xung quanh là <strong>Quang trở (Kí hiệu kĩ thuật là LDR hoặc mã $R_1$)</strong>." },

            // Slide 2: Sơ đồ đấu nối chân bo mạch Arduino thực tế
            { slide: 2, type: "text", text: "<strong>Quy chuẩn sơ đồ kết nối phần cứng hệ thống (Hình 26.1 SGK):</strong>" },
            { slide: 2, type: "table", headers: ["Linh kiện ngoại vi", "Bản chất khối chức năng", "Chân kết nối trên mạch Arduino"], rows: [
                ["Mạch phân áp quang trở ($R_1$)", "Khối đầu vào cảm biến (Analog Input)", "Kết nối vào cổng nhận tín hiệu tương tự <strong>A0</strong>"],
                ["Đèn LED phát sáng", "Cơ cấu chấp hành đầu ra (Output)", "Kết nối vào cổng xuất xung kỹ thuật số <strong>Số 9</strong>"]
            ]},

            // Slide 3: Phân tích nguyên lý bù sáng tự động của hệ thống
            { slide: 3, type: "warning", title: "Nguyên lý vận hành tự động điều khiển", text: "Khi ánh sáng môi trường bên ngoài mạnh lên $\\rightarrow$ Điện trở của quang trở $R_1$ lập tức sụt giảm mạnh $\\rightarrow$ Giá trị điện áp phân áp trích xuất đưa vào chân tương tự A0 sụt giảm xuống mức thấp $\\rightarrow$ Bộ não vi điều khiển xử lý thuật toán mã chương trình nhúng, ra lệnh xuất dòng điều chế độ rộng xung <strong>PWM</strong> ra chân số 9 ở mức thấp $\\rightarrow$ Dòng qua đèn LED giảm làm đèn sáng yếu đi hoặc tắt hẳn và ngược lại (Cơ chế tự động bù sáng thông minh)." },

            // Slide 4: Trắc nghiệm Đúng/Sai đánh giá năng lực thực hành tổng hợp
            { slide: 4, type: "text", text: "<strong>Kịch bản thực hành: Học sinh nối mạch quang trở vào chân A0 và LED vào chân 9 của mạch Arduino Uno:</strong>" },
            { slide: 4, type: "list", items: [
                "a) Hệ thống này ứng dụng phương thức điều khiển tín hiệu tương tự biến thiên liên tục để thay đổi độ sáng thay vì chỉ đóng cắt On/Off đơn thuần. <strong>(ĐÚNG)</strong>",
                "b) Chân số 9 của bo mạch Arduino trong sơ đồ thực hành này được lập trình để cấu hình là cổng thu dữ liệu vào (Input). <strong>(SAI - Bắt buộc phải cấu hình là cổng xuất dữ liệu ra Output để cấp dòng điều khiển LED)</strong>",
                "c) Việc thay đổi trị số điện áp của điện trở phân áp tải $R_3$ ($10\\,\\text{k}\\Omega$) sẽ trực tiếp tác động làm thay đổi độ nhạy cảm ứng ánh sáng của hệ thống. <strong>(ĐÚNG)</strong>"
            ]},

            // Slide 5: Khả năng tùy biến module mở rộng hệ thống
            { slide: 5, type: "summary", title: "Năng lực tư duy phát triển hệ thống nhúng thông minh", text: "<strong>Tình huống mở rộng tư duy bài 26:</strong> Nếu giữ nguyên toàn bộ cấu trúc kết nối phần cứng và mã chương trình, chỉ tiến hành nhấc bỏ linh kiện quang trở ra và thay thế vào đó bằng một module cảm biến đo nhiệt độ môi trường tương tự, hệ thống sẽ biến đổi tính năng như thế nào?<br><strong>Trả lời:</strong> Mạch điện sẽ lập tức tự động chuyển đổi tính năng một cách khoa học: Trở thành hệ thống đèn LED tự động điều chỉnh cường độ sáng co giãn mượt mà theo mức độ tăng giảm nhiệt độ của môi trường xung quanh." }
        ]
    }
];
