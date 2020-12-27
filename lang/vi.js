export const transValidation={
  email_incorrect:"Email phai co dang example@sadaa.com",
  gender_incorrect:"Gender",
  password_incorrect:"Mat khau phải chua 8 ki tu chu hoa chu thuong va so",
  password_confirmation_incorrect:"Nhap lai mat khau khong chinh xac",
  update_username:"Username chua 3-17 ki tu va khong chua ki tu dac biet",
  update_gender:"Oops!Du lieu gioi tinh co van de",
  update_address:"Dia chi gioi han 3-30 ki tu",
  update_phone:"Dinh dang so dien thoai Viet Nam",
  keyword_find_user:"Loi tu khoa  tim kiem",
  message_text_emoji_incorrect:"Tin nhắn không hợp lệ"
 

};
export const transErrors={
  account_in_use:"Email đã được sử  dụng",
  account_in_remove:"Tai khoan nay da bi xoa",
  account_is_blocked:"Tài khoản của bạn đã bị khóa",
  account_not_active:"Tài khoản của ban chưa được active",
  account_undefinded:"Tài khỏan không tồn tại",
  token_undefinded:"Tai khoan nay da duoc active truoc do",
  login_failed:"Wrong email or password",
  server_error:"This is error of server",
  avatar_type:"File khong hop le",
  avatar_size:"File qua lon khong the tai",
  user_current_password_failed:"Mat khau hien tai khong chinh xac",
}
export const transSuccess= {
  userCreated : (userEmail)=>{
    return `Account <strong>${userEmail}</strong> created successly`
  },
  account_active:"Account actived. You can use app after login",
  loginSuccess:(username)=>{
     return `Hello ${username}`
  },
  logout_success:"Logout success",
  avatar_updated:"Cap nhat anh dai dien thnah cong",
  user_info_update:"cap nhat thong tin thanh congt mat khau",
  user_password_updated:"Cap nhap mat khau thanh cong"
}
export const transMail={
  subject: "Active Account",
  template: (linkVerify) =>{
    return `
    <h2>Email active account DVLChat".</h2>
    <h3>Click vao day de de active tai khoan</h3>
    <h3><a href=${linkVerify} target="blank">${linkVerify}</a></h3>
    `
  },
  send_failed:"Failed in process send active mail"
}
export const contract={
  template: (name,address,phone,namecar,startDate,endDate,total) =>{
    return `

      <div style="text-align: center;font-size: 30px;font-weight: 600;">CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</div>
      <div style="text-align: center;font-size: 25px">ĐỘC LẬP - TỰ DO - HẠNH PHÚC</div>
      <div style="text-align: center;font-size: 25px">HỢP ĐỒNG THUÊ XE</div>
      <div style="padding:50px">
        <div style="font-size: 20px;font-weight: 600;text-decoration: underline;">
          BÊN CHO THUÊ (Sau đây gọi là bên A)
        </div>
        <div style="margin-top:20px;">
          Công ty: TNHH  Cardoor
          <br />
          Địa chỉ: Số 1 Đại Cồ Việt
          <br />
          Số điện thoại: 0123456789
        </div>
        <div style="font-size: 20px;font-weight: 600;text-decoration: underline;margin-top:20px;">
          BÊN THUÊ (Sau đây gọi là bên BÊN)
        </div>
        <div style="margin-top:20px;">
          Tên: ${name}
          <br />
          Địa chỉ:${address}
          <br />
          Số điện thoại:${phone}
        </div>
        <div style="font-size: 20px;font-weight: 600;margin-top:20px;">
          Điều 1. Đặc điểm và thỏa thuận thuê xe
        </div>
        <div style="margin-top:20px;">
          Đặc điểm của xe ô tô nêu trên được ghi cụ thể như sau:<br />
    
          Loại xe : ${namecar} <br />
    
    
        </div>
        <div style="font-size: 20px;font-weight: 600;margin-top:20px;">
          Điều 2. Thời hạn thuê xe ô tô
        </div>
        <div style="margin-top:20px;">
          Thời gian thuê từ ngày ${startDate} đến ngày ${endDate}
        </div>
        <div style="font-size: 20px;font-weight: 600;margin-top:20px;">
          Điều 3. Giá thuê và phương thức thanh toán
        </div>
        <div style="margin-top:20px;">
          1. Giá thuê tài sản nêu trên là: ${total} USD<br />
          2. Phương thức thanh toán: Thanh toán bằng tiền mặt và Bên B phải thanh toán cho Bên A số tiền thuê xe ô tô nêu
          trên vào lúc trả xe.
    
    
    
    
        </div>
        <div style="font-size: 20px;font-weight: 600;margin-top:20px;">
          Điều 4: Nghĩa vụ và quyền của các bên
        </div>
        <div style="margin-top:20px;">
    
    
          1. Bên B có các nghĩa vụ sau đây:<br/>
    
          a) Bảo quản tài sản thuê như tài sản của chính mình, không được thay đổi tình trạng tài sản, kông được cho thuê
          lại tài sản nếu không có sự đồng ý của Bên A;<br/>
    
          b) Sử dụng tài sản thuê đúng công dụng, mục đích của tài sản;<br/>
    
          c) Trả đủ tiền thuê tài sản theo phương thức đã thỏa thuận;<br/>
    
          d) Trả lại tài sản thuê đúng thời hạn và phương thức đã thỏa thuận;<br/>
    
          e) Chịu toàn bộ chi phí liên quan đến chiếc xe trong quá trình thuê. Trong quá trình thuê xe mà Bên B gây ra tai
          nạn, hỏng hóc xe thì Bên B phải có trách nhiệm thông báo ngay cho Bên A và chịu trách nhiệm sửa chữa, phục hồi
          nguyên trạng xe cho Bên A.</br>
    
          2. Bên B có các quyền sau đây:<br/>
    
          a) Nhận tài sản thuê theo đúng thỏa thuận; <br/>
    
          b) Được sử dụng tài sản thuê theo đúng công dụng, mục đích của tài sản;<br/>
    
          c) Đơn phương đình chỉ thực hiện Hợp đồng thuê tài sản và yêu cầu bồi thường thiệt hại nếu:<br/>
    
          - Bên A chậm giao tài sản theo thỏa thuận gây thiệt hại cho Bên B;<br/>
    
          - Bên A giao tài sản thuê không đúng đắc điểm, tình trạng như mô tả tại Điều 1 Hợp đồng;<br/>
    
    
    
    
        </div>
        <div style="width: 50%;float: left;margin-top:20px;padding-left: 100px;">
          <span style="font-size: 20px;font-weight: 600;" >BÊN CHO THUÊ</span><br/>
            <label style="padding-left:40px">Lợi</label><br/>
            <div>GĐ Đoàn Văn Lợi </div><br/>
    
        </div>
        <div style="width: 30%;float: right;margin-top:20px;padding-left: 100px;">
          <span style="font-size: 20px;font-weight: 600;" >BÊN THUÊ</span><br/>
     
            <div>${name}</div><br/>
    
        </div>
    
    
    
    
   
    `
}
}
