// بيانات غرف تجريبية
// ملاحظة: حقل city هنا يمثل "الدولة" حتى يتوافق مع قائمة الاختيار في HTML
const ROOMS = [
  // مصر
  {
    id: 1,
    name: "غرفة منفردة اقتصادية - القاهرة",
    type: "standard",
    price: 55,
    capacity: 1,
    city: "مصر",
    image:
      "image/photo1.webp",
    tags: ["إفطار خفيف", "واي فاي", "إلغاء مجاني"],
  },
  {
    id: 2,
    name: "غرفة مزدوجة مطلة على النيل",
    type: "deluxe",
    price: 95,
    capacity: 2,
    city: "مصر",
    image:
      "image/photo2.webp",
    tags: ["إفطار مفتوح", "مطل على النيل", "موقف سيارات"],
  },
  {
    id: 3,
    name: "غرفة عائلية رباعية - الإسكندرية",
    type: "family",
    price: 140,
    capacity: 4,
    city: "مصر",
    image:
      "image/photo3.jpeg",
    tags: ["قريبة من البحر", "إفطار مجاني", "نادي أطفال"],
  },

  // الإمارات العربية المتحدة
  {
    id: 4,
    name: "غرفة سويت مزدوجة - دبي مارينا",
    type: "suite",
    price: 180,
    capacity: 2,
    city: "الإمارة العربية المتحدة",
    image:
      "image/photo4.webp",
    tags: ["مطل على المارينا", "إفطار وعشاء", "خدمة غرف 24 ساعة"],
  },
  {
    id: 5,
    name: "غرفة ثلاثية مطلة على برج خليفة",
    type: "deluxe",
    price: 210,
    capacity: 3,
    city: "الإمارة العربية المتحدة",
    image:
      "image/photo5.jpeg",
    tags: ["إطلالة مميزة", "مسبح داخلي", "موقف سيارات مجاني"],
  },
  {
    id: 6,
    name: "جناح فاخر تنفيذي",
    type: "suite",
    price: 260,
    capacity: 2,
    city: "الإمارة العربية المتحدة",
    image:
      "image/photo6.jpeg",
    tags: ["صالة أعمال", "خدمة خاصة", "إفطار في الغرفة"],
  },

  // المملكة العربية السعودية
  {
    id: 7,
    name: "غرفة مزدوجة - الرياض",
    type: "standard",
    price: 90,
    capacity: 2,
    city: "المملكة العربية السعودية",
    image:
      "image/photo7.png",
    tags: ["قريبة من المركز المالي", "واي فاي سريع"],
  },
  {
    id: 8,
    name: "جناح عائلي ثلاثي - جدة",
    type: "family",
    price: 155,
    capacity: 3,
    city: "المملكة العربية السعودية",
    image:
      "image/photo8.webp",
    tags: ["إفطار مجاني", "مطل على البحر الأحمر"],
  },

  // تركيا
  {
    id: 9,
    name: "غرفة منفردة في إسطنبول القديمة",
    type: "standard",
    price: 70,
    capacity: 1,
    city: "تركيا",
    image:
      "image/photo9.jpeg",
    tags: ["قريبة من المعالم", "إفطار تركي تقليدي"],
  },
  {
    id: 10,
    name: "غرفة رباعية مطلة على البوسفور",
    type: "family",
    price: 160,
    capacity: 4,
    city: "تركيا",
    image:
      "image/photo10.webp",
    tags: ["إطلالة على البوسفور", "شرفة خاصة"],
  },

  // المغرب
  {
    id: 11,
    name: "غرفة مزدوجة على الطراز المغربي - مراكش",
    type: "deluxe",
    price: 100,
    capacity: 2,
    city: "المغرب",
    image:
      "image/photo2.webp",
    tags: ["ديكور تقليدي", "إفطار مغربي"],
  },
  {
    id: 12,
    name: "غرفة ثلاثية - كازابلانكا",
    type: "standard",
    price: 120,
    capacity: 3,
    city: "المغرب",
    image:
      "image/photo12.webp",
    tags: ["قريبة من الكورنيش", "موقف سيارات"],
  },

  // الجزائر
  {
    id: 13,
    name: "غرفة منفردة - الجزائر العاصمة",
    type: "standard",
    price: 65,
    capacity: 1,
    city: "الجزائر",
    image:
      "image/photo2.webp",
    tags: ["إنترنت مجاني", "إلغاء مجاني"],
  },
  {
    id: 14,
    name: "غرفة رباعية عائلية",
    type: "family",
    price: 135,
    capacity: 4,
    city: "الجزائر",
    image:
      "image/photo14.jpeg",
    tags: ["إفطار شامل", "قريبة من وسط المدينة"],
  },

  // قطر
  {
    id: 15,
    name: "غرفة مزدوجة - الدوحة",
    type: "deluxe",
    price: 150,
    capacity: 2,
    city: "قطر",
    image:
      "image/photo4.webp",
    tags: ["قريبة من الكورنيش", "مسبح خارجي"],
  },
  {
    id: 16,
    name: "جناح تنفيذي مطل على البحر",
    type: "suite",
    price: 230,
    capacity: 3,
    city: "قطر",
    image:
      "image/photo16.webp",
    tags: ["إطلالة بحرية", "إفطار وغداء", "صالة رياضية"],
  },
];

const bookingForm = document.getElementById("booking-form");
const roomsList = document.getElementById("rooms-list");
const bookingModal = document.getElementById("booking-modal");
const bookingSummary = document.getElementById("booking-summary");
const guestForm = document.getElementById("guest-form");
const modalClose = document.getElementById("modal-close");
const modalOk = document.getElementById("modal-ok");
const toast = document.getElementById("toast");

const contactForm = document.getElementById("contact-form");
const checkinInput = document.getElementById("checkin");
const checkoutInput = document.getElementById("checkout");

// خريطة لأنواع الغرف في الـ HTML إلى الحد الأدنى للسعة (عدد النزلاء)
const ROOM_TYPE_MIN_CAPACITY = {
  single: 1,
  double: 2,
  twin: 2,
  triple: 3,
  quad: 4,
};

let lastSearch = {
  city: null,
  checkin: null,
  checkout: null,
  guests: null,
};

let selectedRoomForBooking = null;

function formatDate(dateStr) {
  if (!dateStr) return "";
  const date = new Date(dateStr);
  return date.toLocaleDateString("ar-EG", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function calculateNights(checkin, checkout) {
  if (!checkin || !checkout) return 0;
  const checkinDate = new Date(checkin);
  const checkoutDate = new Date(checkout);
  const diffTime = checkoutDate - checkinDate;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays > 0 ? diffDays : 0;
}

function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.remove("hidden");
  setTimeout(() => {
    toast.classList.add("hidden");
  }, 2800);
}

function createRoomCard(room) {
  const card = document.createElement("article");
  card.className = "room-card";

  // تحديد نوع الغرفة للعرض حسب السعة
  let typeLabel = "غرفة";
  if (room.capacity === 1) typeLabel = "منفردة";
  else if (room.capacity === 2) typeLabel = "مزدوجة";
  else if (room.capacity === 3) typeLabel = "ثلاثية";
  else if (room.capacity === 4) typeLabel = "رباعية";

  card.innerHTML = `
    <div class="room-image" style="background-image:url('${room.image}')"></div>
    <div class="room-body">
      <h3 class="room-title">${room.name}</h3>
      <div class="room-meta">
        <span>${room.city}</span>
        <span>حتى ${room.capacity} نزلاء</span>
      </div>
      <div class="room-meta">
        <span class="room-type">${typeLabel}</span>
        <span class="room-price">ابتداءً من ${room.price}$ / ليلة</span>
      </div>
    </div>
    <div class="room-footer">
      <div class="room-tags">
        ${room.tags.map((t) => `<span class="tag">${t}</span>`).join("")}
      </div>
      <button class="btn btn-primary full-width" data-room-id="${
        room.id
      }">احجز الآن</button>
    </div>
  `;
  return card;
}

function renderRooms(rooms) {
  if (!roomsList) return;
  roomsList.innerHTML = "";

  if (!rooms.length) {
    roomsList.innerHTML =
      '<p style="color:#9ca3af">لا توجد غرف مطابقة لمعايير البحث الحالية.</p>';
    return;
  }

  rooms.forEach((room) => roomsList.appendChild(createRoomCard(room)));
}

function filterRooms({ city, roomType, guests }) {
  return ROOMS.filter((room) => {
    if (city && room.city !== city) return false;

    // مطابقة نوع الغرفة (single/double/... حسب HTML) مع السعة
    if (roomType && ROOM_TYPE_MIN_CAPACITY[roomType]) {
      const minCap = ROOM_TYPE_MIN_CAPACITY[roomType];
      if (room.capacity < minCap) return false;
    }

    if (guests && Number(guests) > room.capacity) return false;
    return true;
  });
}

function openModal(room) {
  if (!bookingModal || !bookingSummary) return;
  selectedRoomForBooking = room;

  const details = [];
  if (lastSearch.city) details.push(`الدولة: ${lastSearch.city}`);
  if (lastSearch.checkin)
    details.push(`الوصول: ${formatDate(lastSearch.checkin)}`);
  if (lastSearch.checkout)
    details.push(`المغادرة: ${formatDate(lastSearch.checkout)}`);
  if (lastSearch.guests) details.push(`عدد النزلاء: ${lastSearch.guests}`);

  // حساب عدد الليالي
  const nights = calculateNights(lastSearch.checkin, lastSearch.checkout);
  const totalPrice = nights * room.price;

  let nightsInfo = "";
  if (nights > 0) {
    nightsInfo = `<br/><strong style="color: #22c55e; font-size: 1.1rem;">عدد الليالي: ${nights} ليلة</strong>`;
    if (totalPrice > 0) {
      nightsInfo += `<br/><strong style="color: #38bdf8; font-size: 1.1rem;">إجمالي السعر: ${totalPrice}$ (${room.price}$ × ${nights} ليلة)</strong>`;
    }
  }

  bookingSummary.innerHTML = `
    أنت على وشك حجز: <strong>${room.name}</strong><br/>
    ${details.length ? "<br/>" + details.join(" • ") : ""}
    ${nightsInfo}
  `;

  // إعادة ضبط نموذج بيانات الحاجز
  if (guestForm) {
    guestForm.reset();
    modalOk.classList.add("hidden");
    guestForm.classList.remove("hidden");
  }

  bookingModal.classList.remove("hidden");
}

function closeModal() {
  if (!bookingModal) return;
  bookingModal.classList.add("hidden");
  selectedRoomForBooking = null;
}

if (bookingForm) {
  bookingForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const city = document.getElementById("city").value;
    const checkin = document.getElementById("checkin").value;
    const checkout = document.getElementById("checkout").value;
    const guests = document.getElementById("guests").value;
    const roomType = document.getElementById("roomType").value;

    // تحقق من أن تاريخ المغادرة بعد تاريخ الوصول
    if (checkin && checkout) {
      const checkinDate = new Date(checkin);
      const checkoutDate = new Date(checkout);
      if (checkoutDate <= checkinDate) {
        showToast("يجب أن يكون تاريخ المغادرة بعد تاريخ الوصول");
        return;
      }
    }

    lastSearch = { city, checkin, checkout, guests };

    const result = filterRooms({ city, roomType, guests });
    renderRooms(result);

    const roomsSection = document.getElementById("rooms");
    if (roomsSection) {
      roomsSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    showToast("تم تحديث قائمة الغرف المتاحة حسب اختيارك");
  });
}

if (roomsList) {
  roomsList.addEventListener("click", (e) => {
    const target = e.target;
    if (target.matches("button[data-room-id]")) {
      const roomId = Number(target.getAttribute("data-room-id"));
      const room = ROOMS.find((r) => r.id === roomId);
      if (!room) return;

      // ملء حقل الدولة تلقائياً بناءً على دولة الغرفة
      const cityField = document.getElementById("city");
      if (cityField && room.city) {
        cityField.value = room.city;
        // تحديث lastSearch أيضاً
        lastSearch.city = room.city;
      }

      // التأكد من أن بيانات نموذج الحجز الأساسية مملوءة أولاً
      const checkinField = document.getElementById("checkin");
      const checkoutField = document.getElementById("checkout");
      const guestsField = document.getElementById("guests");
      const roomTypeField = document.getElementById("roomType");

      const isFormFilled =
        checkinField?.value &&
        checkoutField?.value &&
        guestsField?.value &&
        roomTypeField?.value;

      // لو النموذج غير مكتمل، ننقله لقسم الحجز ونظهر رسالة
      if (!isFormFilled) {
        const searchSection = document.getElementById("search");
        if (searchSection) {
          searchSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        showToast("تم ملء حقل الدولة تلقائياً. من فضلك املأ باقي بيانات الحجز (التواريخ، النزلاء، نوع الغرفة)");
        // تركيز على أول حقل فارغ إن وجد
        const fieldsInOrder = [
          checkinField,
          checkoutField,
          guestsField,
          roomTypeField,
        ].filter(Boolean);
        const firstEmpty = fieldsInOrder.find((el) => !el.value);
        if (firstEmpty) firstEmpty.focus();
        return;
      }

      // لو البيانات مكتملة افتح مودال تأكيد الحجز بالغرفة المختارة
      openModal(room);
    }
  });
}

if (modalClose) modalClose.addEventListener("click", closeModal);
if (modalOk) modalOk.addEventListener("click", closeModal);
if (bookingModal) {
  bookingModal.addEventListener("click", (e) => {
    if (e.target === bookingModal) closeModal();
  });
}

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    contactForm.reset();
    showToast("تم إرسال رسالتك (مثال تجريبي)");
  });
}

// إرسال نموذج بيانات الحاجز داخل المودال
if (guestForm) {
  guestForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("guest-name").value.trim();
    const phone = document.getElementById("guest-phone").value.trim();
    const email = document.getElementById("guest-email").value.trim();

    if (!name || !phone || !email) {
      showToast("من فضلك أدخل اسم الحاجز ورقم الهاتف والبريد الإلكتروني");
      return;
    }

    // حساب عدد الليالي والسعر الإجمالي
    const nights = calculateNights(lastSearch.checkin, lastSearch.checkout);
    const totalPrice = nights * (selectedRoomForBooking ? selectedRoomForBooking.price : 0);

    let bookingDetails = "";
    if (selectedRoomForBooking) {
      bookingDetails = `
        <br/><br/>
        <strong>تفاصيل الحجز:</strong><br/>
        الغرفة: ${selectedRoomForBooking.name}<br/>
        ${lastSearch.checkin ? `تاريخ الوصول: ${formatDate(lastSearch.checkin)}` : ""}<br/>
        ${lastSearch.checkout ? `تاريخ المغادرة: ${formatDate(lastSearch.checkout)}` : ""}<br/>
        ${nights > 0 ? `<strong style="color: #22c55e;">عدد الليالي: ${nights} ليلة</strong><br/>` : ""}
        ${totalPrice > 0 ? `<strong style="color: #38bdf8;">إجمالي السعر: ${totalPrice}$</strong>` : ""}
      `;
    }

    bookingSummary.innerHTML = `
      تم استلام بيانات حجزك بنجاح، يا <strong>${name}</strong> 🎉<br/><br/>
      سنقوم بالتواصل معك على الرقم <strong>${phone}</strong> أو البريد <strong>${email}</strong>
      لتأكيد الحجز الخاص بالغرفة: <strong>${
        selectedRoomForBooking ? selectedRoomForBooking.name : ""
      }</strong>.
      ${bookingDetails}
      <br/><br/>
      (هذا مثال تجريبي، ويمكن ربطه لاحقًا بباك إند حقيقي لحفظ الحجز في قاعدة بيانات)
    `;

    guestForm.classList.add("hidden");
    modalOk.classList.remove("hidden");

    showToast("تم تسجيل طلب الحجز (مثال تجريبي)");
  });
}

// Login and Signup Modals
const loginBtn = document.getElementById("login-btn");
const signupBtn = document.getElementById("signup-btn");
const loginModal = document.getElementById("login-modal");
const signupModal = document.getElementById("signup-modal");
const logoutModal = document.getElementById("logout-modal");
const loginModalClose = document.getElementById("login-modal-close");
const signupModalClose = document.getElementById("signup-modal-close");
const logoutModalClose = document.getElementById("logout-modal-close");
const loginForm = document.getElementById("login-form");
const signupForm = document.getElementById("signup-form");
const switchToSignup = document.getElementById("switch-to-signup");
const switchToLogin = document.getElementById("switch-to-login");
const logoutCancelBtn = document.getElementById("logout-cancel-btn");
const logoutConfirmBtn = document.getElementById("logout-confirm-btn");
const logoutUserInfo = document.getElementById("logout-user-info");

// حالة تسجيل الدخول
let isLoggedIn = false;
let currentUser = null;

function openLoginModal() {
  // إذا كان المستخدم مسجل دخول، افتح نافذة تسجيل الخروج بدلاً من ذلك
  if (isLoggedIn) {
    openLogoutModal();
    return;
  }
  
  if (loginModal) {
    loginModal.classList.remove("hidden");
    if (signupModal) signupModal.classList.add("hidden");
    if (logoutModal) logoutModal.classList.add("hidden");
  }
}

function openLogoutModal() {
  if (logoutModal) {
    logoutModal.classList.remove("hidden");
    if (loginModal) loginModal.classList.add("hidden");
    if (signupModal) signupModal.classList.add("hidden");
    
    // عرض معلومات المستخدم إذا كان مسجل دخول
    if (currentUser) {
      logoutUserInfo.innerHTML = `
        مرحباً <strong>${currentUser.name}</strong><br/>
        <span style="color: #9ca3af; font-size: 0.9rem;">${currentUser.email}</span><br/><br/>
        هل أنت متأكد من رغبتك في تسجيل الخروج؟
      `;
    }
  }
}

function closeLogoutModal() {
  if (logoutModal) {
    logoutModal.classList.add("hidden");
  }
}

function closeLoginModal() {
  if (loginModal) {
    loginModal.classList.add("hidden");
    if (loginForm) loginForm.reset();
  }
}

function openSignupModal() {
  if (signupModal) {
    signupModal.classList.remove("hidden");
    if (loginModal) loginModal.classList.add("hidden");
  }
}

function closeSignupModal() {
  if (signupModal) {
    signupModal.classList.add("hidden");
    if (signupForm) signupForm.reset();
  }
}

if (loginBtn) {
  loginBtn.addEventListener("click", openLoginModal);
}

if (logoutModalClose) {
  logoutModalClose.addEventListener("click", closeLogoutModal);
}

if (logoutCancelBtn) {
  logoutCancelBtn.addEventListener("click", closeLogoutModal);
}

if (logoutModal) {
  logoutModal.addEventListener("click", (e) => {
    if (e.target === logoutModal) closeLogoutModal();
  });
}

if (logoutConfirmBtn) {
  logoutConfirmBtn.addEventListener("click", () => {
    // تسجيل الخروج
    isLoggedIn = false;
    currentUser = null;
    
    // تحديث الأزرار
    if (loginBtn) loginBtn.textContent = "تسجيل دخول";
    if (signupBtn) signupBtn.textContent = "إنشاء حساب";
    
    closeLogoutModal();
    showToast("تم تسجيل الخروج بنجاح");
  });
}

if (signupBtn) {
  signupBtn.addEventListener("click", () => {
    // إذا كان المستخدم مسجل دخول، زر "تسجيل الخروج" يفتح نافذة تسجيل الخروج
    if (isLoggedIn) {
      openLogoutModal();
    } else {
      openSignupModal();
    }
  });
}

if (loginModalClose) {
  loginModalClose.addEventListener("click", closeLoginModal);
}

if (signupModalClose) {
  signupModalClose.addEventListener("click", closeSignupModal);
}

if (switchToSignup) {
  switchToSignup.addEventListener("click", (e) => {
    e.preventDefault();
    closeLoginModal();
    openSignupModal();
  });
}

if (switchToLogin) {
  switchToLogin.addEventListener("click", (e) => {
    e.preventDefault();
    closeSignupModal();
    openLoginModal();
  });
}

if (loginModal) {
  loginModal.addEventListener("click", (e) => {
    if (e.target === loginModal) closeLoginModal();
  });
}

if (signupModal) {
  signupModal.addEventListener("click", (e) => {
    if (e.target === signupModal) closeSignupModal();
  });
}

if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("login-email").value.trim();
    const password = document.getElementById("login-password").value.trim();

    if (!email || !password) {
      showToast("من فضلك أدخل البريد الإلكتروني وكلمة المرور");
      return;
    }

    // هنا يمكن إضافة منطق تسجيل الدخول الحقيقي
    // حفظ بيانات المستخدم
    isLoggedIn = true;
    currentUser = {
      name: "المستخدم", // في التطبيق الحقيقي، سيأتي من الاستجابة
      email: email
    };
    
    showToast("تم تسجيل الدخول بنجاح (مثال تجريبي)");
    closeLoginModal();
    
    // تحديث الأزرار لإظهار حالة تسجيل الدخول
    if (loginBtn) loginBtn.textContent = "حسابي";
    if (signupBtn) signupBtn.textContent = "تسجيل الخروج";
  });
}

if (signupForm) {
  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("signup-name").value.trim();
    const email = document.getElementById("signup-email").value.trim();
    const phone = document.getElementById("signup-phone").value.trim();
    const password = document.getElementById("signup-password").value.trim();
    const confirmPassword = document.getElementById("signup-confirm-password").value.trim();

    if (!name || !email || !phone || !password || !confirmPassword) {
      showToast("من فضلك املأ جميع الحقول");
      return;
    }

    if (password !== confirmPassword) {
      showToast("كلمة المرور وتأكيدها غير متطابقين");
      return;
    }

    if (password.length < 6) {
      showToast("كلمة المرور يجب أن تكون 6 أحرف على الأقل");
      return;
    }

    // هنا يمكن إضافة منطق إنشاء الحساب الحقيقي
    // حفظ بيانات المستخدم وتسجيل الدخول تلقائياً
    isLoggedIn = true;
    currentUser = {
      name: name,
      email: email,
      phone: phone
    };
    
    showToast(`تم إنشاء الحساب بنجاح، مرحباً ${name}! (مثال تجريبي)`);
    closeSignupModal();
    
    // تحديث الأزرار لإظهار حالة تسجيل الدخول
    if (loginBtn) loginBtn.textContent = "حسابي";
    if (signupBtn) signupBtn.textContent = "تسجيل الخروج";
  });
}

document.addEventListener("DOMContentLoaded", () => {
  // منع اختيار تاريخ وصول أو مغادرة قبل تاريخ اليوم
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const dd = String(today.getDate()).padStart(2, "0");
  const todayStr = `${yyyy}-${mm}-${dd}`;

  if (checkinInput) checkinInput.setAttribute("min", todayStr);
  if (checkoutInput) checkoutInput.setAttribute("min", todayStr);

  // عند اختيار تاريخ الوصول، يجب أن يكون تاريخ المغادرة على الأقل في اليوم التالي
  if (checkinInput && checkoutInput) {
    checkinInput.addEventListener("change", () => {
      const value = checkinInput.value;
      if (!value) return;

      const checkinDate = new Date(value);
      // اليوم التالي لتاريخ الوصول
      const minCheckoutDate = new Date(checkinDate.getTime() + 24 * 60 * 60 * 1000);
      const y = minCheckoutDate.getFullYear();
      const m = String(minCheckoutDate.getMonth() + 1).padStart(2, "0");
      const d = String(minCheckoutDate.getDate()).padStart(2, "0");
      const minCheckoutStr = `${y}-${m}-${d}`;

      checkoutInput.setAttribute("min", minCheckoutStr);

      // إذا كان التاريخ المختار للمغادرة قبل المين الجديد، نعدّله
      if (checkoutInput.value && checkoutInput.value < minCheckoutStr) {
        checkoutInput.value = minCheckoutStr;
      }
    });
  }

  renderRooms(ROOMS);
});



