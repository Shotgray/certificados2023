document.addEventListener("DOMContentLoaded", function() {
    const students = [
        { name: "MOYA TUNQUI JARET CORTIS", certificateURL: "https://drive.google.com/file/d/1sg-6S6H5KG2m6ZnrJdnF0dwXdZYc0frH/view?usp=drive_link", password: "75486316" },
        { name: "OLIVARES TORRE MARÍA ANTONIETA", certificateURL: "https://drive.google.com/file/d/1XaSti45376cDmh9-MD3zLPGQ5UC_czeF/view?usp=sharing", password: "23834098" },
        { name: "BACA VISAGA, EMPERATRIZ ROSA", certificateURL: "https://drive.google.com/file/d/1skqmz69oecpvfcjfc4MjMrRBnQMorrVj/view?usp=sharing", password: "75807332" },
        { name: "BACA ORCON, WILIANS ANTHONY", certificateURL: "https://drive.google.com/file/d/1dswhlb5UUk2vE8rUF3nGM4I2DEFjxdpw/view?usp=sharing", password: "70061770" },
        { name: "PARAVECINO VALDEZ, ANGIE", certificateURL: "https://drive.google.com/file/d/1dMdtPhyG3Lvv5K80o9W9uZDXlwKau8Yc/view?usp=sharing", password: "76279069" },
        { name: "TUMPE TORRES, MARIA ALEJANDRA", certificateURL: "https://drive.google.com/file/d/1IHxnQS5MGpCrV9bZ5rctohVk4whaEhlh/view?usp=drive_link", password: "73086741" },
        { name: "GUZMÁN SOTO, PAOLA ESCARLIET", certificateURL: "https://drive.google.com/file/d/1pmnEJHTaYzKnSwvvd2S2FL5NWZ9dgNPh/view?usp=sharing", password: "70878175" },
        { name: "PANDO DIAZ WALDO ALEX", certificateURL: "https://drive.google.com/file/d/1EBUCE2lEWwy7QWZa15ZukYxXwjSESCr3/view?usp=sharing", password: "23998993" },
        { name: "PÉREZ SALAS VALERIA", certificateURL: "https://drive.google.com/file/d/1mKd9LF_uVAYcuYBT6tP3Oh6MvQM07dId/view?usp=sharing", password: "72503779" },
        { name: "PAREDES JAÉN ANDRÉS", certificateURL: "https://drive.google.com/file/d/1vTplIwfCoKv7UvcYATu6XqTGCZh226Ew/view?usp=sharing", password: "70278885" },
        { name: "BOCANGEL GUTIÉRREZ, MARIELA", certificateURL: "https://drive.google.com/file/d/1z8pIgdwwmJSpSREZXOYbKdaxY8Q2Nz8K/view?usp=sharing", password: "74700451" },
        { name: "LEÓN UMERES, MILAGROS JHENIFER", certificateURL: "https://drive.google.com/file/d/1OghBkTS_ssT8EIDPErFfEOaOsPHvhpT1/view?usp=drive_link", password: "74525595" },
        { name: "YABAR ABARCA REYBEL ARMANDO", certificateURL: "https://drive.google.com/file/d/1VlipqzHs6xKgTfQKVw7jiTB1R3zFqatr/view?usp=sharing", password: "71537471" },
        { name: "MIRANDA HUAMAN NAYELI GLADYS", certificateURL: "https://drive.google.com/file/d/1ciq8MmaB2P4yxDrHKNuLa-dPuQVQSgOP/view?usp=sharing", password: "71972971" },
        { name: "ROZAS QUISPE KARELIA", certificateURL: "https://drive.google.com/file/d/1gALERpBMEUKo3O_R-bbuf7apd2go8EPB/view?usp=sharing", password: "70492612" },
        { name: "JORDAN MASCIOTTI ANDREA FERNANDA", certificateURL: "https://drive.google.com/file/d/1uB_FVe22CwrdlS-tX88HbGQlDXbz5wZP/view?usp=sharing", password: "71850175" },
        { name: "GONZALES PEREZ ALDEYNY VALERY", certificateURL: "https://drive.google.com/file/d/1do2B_RhKOf3U7Y_btckTh37XMYYDo7lT/view?usp=sharing", password: "70971637" },
        { name: "ASCUE MADRID MILAGROS ANANI", certificateURL: "https://drive.google.com/file/d/1HFPAU3a4DguxOU-n3PoYxmLCRMqpPhAK/view?usp=drive_link", password: "73033336" },
        { name: "ROBERTO CARLOS CÁRDENAS TOHALINO", certificateURL: "https://drive.google.com/file/d/1Lne36SgTUmry06uxKDSnZ1tiQ8yGZ3a5/view?usp=sharing", password: "74599755" },
        { name: "HUAMÁN GUTIERREZ JENNIFER", certificateURL: "https://drive.google.com/file/d/15fL8TptSdqez4rqXxxokoCNY0J8lEQfc/view?usp=sharing", password: "76207674" },
        { name: "FÍORELA GAMARRA AYMITUMA", certificateURL: "https://drive.google.com/file/d/1nMta093VbIwoHCE_zttHY00iohE4SUK-/view?usp=sharing", password: "73902590" },
        { name: "JORGEIVAN ALVARO MOLINA AIQUI", certificateURL: "https://drive.google.com/file/d/1opcccVzXdnegIAU6Dcip-pTCuGcvteH_/view?usp=sharing", password: "73831525" },
        { name: "BRIAN NIKOLAS CASTRO MUJICA", certificateURL: "https://drive.google.com/file/d/1ebc7w64HJ3Y52VGnu1AhTfggoGHRiEQt/view?usp=sharing", password: "70655109" },
        { name: "BACA ARRIOLA KUKULY NEMESIA", certificateURL: "https://drive.google.com/file/d/1eziyjejadJNeVvD_np_0tP7ZmNItxfMy/view?usp=drive_link", password: "02858080" },
        { name: "VELAZCO CAMACHO GEORGE BRANDON", certificateURL: "https://drive.google.com/file/d/1werNT9sOCXyIv_Szyjli0XIf58GWttm7/view?usp=sharing", password: "72128307" },
        { name: "LOAYZA BRAVO JOHANNA MERCY", certificateURL: "https://drive.google.com/file/d/1eanql3MH4B-1MX589SuVBLg8HOCyyN-o/view?usp=sharing", password: "76450596" },
        { name: "MEDINA YAÑEZ JOSÉ MIGUEL", certificateURL: "https://drive.google.com/file/d/1fo7LgmBwHAsW2MqBV0TY-FHoF-g5emtj/view?usp=sharing", password: "74312058" },
        { name: "CALDERON BENAVENTE ERNANDO MARTIN", certificateURL: "https://drive.google.com/file/d/10gr93iBWAd10VI4Q1P6isP9q-rxzLlrd/view?usp=sharing", password: "73355220" },
        { name: "ANCCO RINCON GABRIELA ALEXANDRA", certificateURL: "https://drive.google.com/file/d/1KxECOSn3VFzouYuqgX5Qdfo59aQiq3UH/view?usp=sharing", password: "72451720" },
        { name: "CONDORI CCASA GABRIELA ASTRID", certificateURL: "https://drive.google.com/file/d/1lJHD80rI-G2UTsgmjaxllWvOhE-h7uCs/view?usp=sharing", password: "72411243" },
        { name: "TUPAYACHI QUISPE LEONARDO CLAREN", certificateURL: "https://drive.google.com/file/d/1KxECOSn3VFzouYuqgX5Qdfo59aQiq3UH/view?usp=sharing", password: "72859419" },
        { name: "HUAMÁN LÁZARO ADRIANA VALENTINA", certificateURL: "https://drive.google.com/file/d/1HN8uOHdCdqvXs3J32vONUw22cuo2CSYh/view?usp=sharing", password: "74993032" },
        { name: "MOZO VALDERRAMA MIGUEL ANGEL", certificateURL: "https://drive.google.com/file/d/1LkjyUuXLEF3pwHAwv42b7KqD1Yiotqzf/view?usp=sharing", password: "74044469" },
        { name: "CARDENAS GIBAJA ALONSO ADAN", certificateURL: "https://drive.google.com/file/d/1ztX3Wonajv8p4CZuEe1r0zzPT8bSGEJK/view?usp=sharing", password: "72963244" },
        { name: "CANCHA RODRIGUEZ JOEL BARNABY", certificateURL: "https://drive.google.com/file/d/1apg8PFwRRT6QIrazgHV6ZzzB2CKU5fOR/view?usp=sharing", password: "72566107" },
        { name: "AEDO MORENO FERNANDO ARTURO", certificateURL: "https://drive.google.com/file/d/1Cahn95ZitvOT8LSisXVrmnkSUDA_FsWp/view?usp=sharing", password: "75343049" },
        { name: "MAMANI TORRES ARIANA KYARALY", certificateURL: "https://drive.google.com/file/d/1-y8Zi3PIqRvabiaUBuDmL5zTu-5hCp61/view?usp=sharing", password: "60267169" },
        { name: "MAZZINI SOTO STEFANI YAIZA", certificateURL: "https://drive.google.com/file/d/1gUWSwtX3ViKNcF8XjwN-yZHGZa3VKhQD/view?usp=sharing", password: "70372589" },
        { name: "CUIRO SORIA BHALERY MARYCIELO", certificateURL: "https://drive.google.com/file/d/1I5zUu_jsovNDSChxrfH0Ke_llak7nmJp/view?usp=sharing", password: "71938541" },
        { name: "REYES CUNO MIRANDA IZEL", certificateURL: "https://drive.google.com/file/d/17dnHlg36Ck08d1IhiYQun3BfyebG5Sex/view?usp=sharing", password: "73310624" },
        { name: "MEDINA URETA JEROEN ALEXANDERS", certificateURL: "https://drive.google.com/file/d/1ie59_i2h8ixxOBwWlf8vJ2HVVhzmGh6D/view?usp=sharing", password: "71410747" },
        { name: "PACHECO SEGOVIA JAIME EDUARDO", certificateURL: "https://drive.google.com/file/d/10y3EMDH16odBpdJmkGV5AX1j4GJsW3xr/view?usp=sharing", password: "72587470" },
        { name: "HERMOSA RODRÍGUEZ KARELIN HASSEL", certificateURL: "https://drive.google.com/file/d/14GS1Te7XWnrvy8qi9T-2b8EJK-TKS2qn/view?usp=sharing", password: "71829733" },
        { name: "CASTILLO RAMOS SHIRLEY ANGHELA", certificateURL: "https://drive.google.com/file/d/1rnnlXovRnyDwYXO29vuTveWJIWxjOnG0/view?usp=sharing", password: "73901907" },
        { name: "CHOQUE BOMBILLA DAVID OSWALDO", certificateURL: "https://drive.google.com/file/d/1r7axwXj8BcjWCNNpX7oJr7mWChKJ15NH/view?usp=sharing", password: "73955871" },
        { name: "GARCIA CEVALLOS ANGELA ARACELI", certificateURL: "https://drive.google.com/file/d/1Cc8hbiKtp6LF5cPCoJiZ2fl5D5I9Ai7P/view?usp=sharing", password: "74724436" },
        { name: "ESPEJO LUCANA SHIOMARA ORIALIT", certificateURL: "https://drive.google.com/file/d/10PatJPB-YdUqwWAR6E7H8IhpVyGQq0AU/view?usp=sharing", password: "44668155" },
        { name: "ENCISO GUZMÁN YASSER HARRYSON", certificateURL: "https://drive.google.com/file/d/1FEuxu9PwkuYr2wmDacf0_-dbXmqmXrWr/view?usp=sharing", password: "73038589" },
        { name: "YUPANQUI RAYAN ANDY ADONAY", certificateURL: "https://drive.google.com/file/d/154xkXpSChgxwVpBCcX3uUS7tVeSAg7Eb/view?usp=sharing", password: "72912327" },
        { name: "SAÑAC SUCNO LADY MICHELLE AVIANY", certificateURL: "https://drive.google.com/file/d/1M7hcY6Ox_Y8KQXOcyqAO6eFWoYbSKeIi/view?usp=sharing", password: "72973668" },
        { name: "ZANABRIA MAMANI PIERO ANDRE", certificateURL: "https://drive.google.com/file/d/1EneWZ52lvd_A9CMcSQtQXArwvecaSJ0t/view?usp=sharing", password: "72946007" },
        { name: "GALLEGOS APARICIO EDO", certificateURL: "https://drive.google.com/file/d/1QAjhRYyyNe10kmphK77gdXVUB3t2d3Zq/view?usp=sharing", password: "23980069" },
        { name: "SANA SILVA JANDY FRED", certificateURL: "https://drive.google.com/file/d/1kbwpc0spD_uKZnkQ0SqbIGPh0lEF4NBr/view?usp=sharing", password: "73599193" },
        { name: "ROA CCAMA LIZ GINNA", certificateURL: "https://drive.google.com/file/d/1nolh5TtDZ83j175bS8mnlgBhd6Q3wqQG/view?usp=sharing", password: "73905310" },
        { name: "CHUNGA GAYOSO NELLY", certificateURL: "https://drive.google.com/file/d/1BvqYCn2UtHVRT4kehmxg97Z1yXrLPmDz/view?usp=sharing", password: "77380537" },
        { name: "ESENARRO QUISPE JOSE NIHAT", certificateURL: "https://drive.google.com/file/d/1a6Mr2YdUPQwMqvXsxm3rvGjdnKcGq6oV/view?usp=sharing", password: "72903221" },
        { name: "HUMPIRE CASTRO ROY ANDY", certificateURL: "https://drive.google.com/file/d/1hgukCnotZaPbmi0hMAC-pPUabumIlWDw/view?usp=sharing", password: "72639015" },
        { name: "VENERO ZUÑIGA ARIANA", certificateURL: "https://drive.google.com/file/d/1K5vruEIoBIejyvR76vXzECgwH-Sw-BYQ/view?usp=sharing", password: "71243433" },
        { name: "GONZALES VILLCAS JIMENA ALESSANDRA", certificateURL: "https://drive.google.com/file/d/1xZNZJ5qCxjqtr-MhqFmQWKOhDapKSl5B/view?usp=sharing", password: "73185693" },
        { name: "ARENAS FARFÁN SIWAR ANGEL", certificateURL: "https://drive.google.com/file/d/1Xe4KZZ3_6uXnn_UKqLQ_CC8fIBpz6zCu/view?usp=sharing", password: "71467112" },
        { name: "GONZALES VILLCAS ORLANDO ANDRÉ", certificateURL: "https://drive.google.com/file/d/1ZMnxgPbsoVmrQSenEKiYVadagcrq12CL/view?usp=sharing", password: "73185752" },
        { name: "SILVA TOLEDO ELVANDREA ALEJANDRA", certificateURL: "https://drive.google.com/file/d/1pVZ2vbr4Fe7adEi1pgYMs1rpUFWjZrh5/view?usp=sharing", password: "75821100" },
        { name: "PAUCAR OLAYUNCA, DIEGO", certificateURL: "https://drive.google.com/file/d/1tANjX1oNebguhhb2rYj93IQMYYCC9jG3/view?usp=sharing", password: "73137681" },
        { name: "TAGLE GONZALES, ARIANNA SOFIA", certificateURL: "https://drive.google.com/file/d/1L1G1qTC3ye7I9GQZPuX9ROB-t1S-EfsR/view?usp=sharing", password: "74730734" },
        { name: "DIAZ QUISPE, JORGE BRAYAN", certificateURL: "https://drive.google.com/file/d/18Eo6I961Um9kReJvztFQZvNBld0NyuG6/view?usp=sharing", password: "76518198" },
        { name: "QUISPE HUALLPA, YAN FRANCO", certificateURL: "https://drive.google.com/file/d/1tFV6bARSmRp8Yo5HM_G0Ty1q5X-UdfS7/view?usp=sharing", password: "74730734" },
        { name: "LIZ SHARMELY USCA QUISPE", certificateURL: "https://drive.google.com/file/d/1FMgan4GQ11gs-EmAMiMZ4xrtQdiNYsss/view?usp=sharing", password: "70583248" },
        { name: "LLALLA HUAYCHU LUZ NIEVES", certificateURL: "https://drive.google.com/file/d/1BlaJOjPvWC9-VJbhDWQFCBCs2L6Wku6i/view?usp=sharing", password: "72083746" },
        { name: "ACURIO COILA MARÍA ISABEL", certificateURL: "https://drive.google.com/file/d/1N3qoF4yjWPEMCCakY4jFNPEZaSck9Oy-/view?usp=sharing", password: "75948782" },
        { name: "PÉREZ CHOQUENAIRA CAROLAY", certificateURL: "https://drive.google.com/file/d/1Zx9OcycUA9K7nXj9g1ovOHFokKfK-EZk/view?usp=sharing", password: "71058143" },
        { name: "VARGAS TISOC, ANAMILE DESIRE", certificateURL: "https://drive.google.com/file/d/1Fve36yxpAhF21fmokyXqGhXI4JevvKWS/view?usp=sharing", password: "74696564" },
        { name: "RIOS HUISA, SEBASTIAN", certificateURL: "https://drive.google.com/file/d/1cHjUzLIJMfj7s-hqCZxbGCV9yc3oh5T3/view?usp=sharing", password: "77125378" },
        { name: "YUCRA VILLACORTA JOEL DANIEL", certificateURL: "https://drive.google.com/file/d/1ofaFwUQb6lCJVodwcA81-L7Q0p1d7Vr5/view?usp=sharing", password: "75206740" },
        { name: "RODRIGUEZ ORMACHEA JANINE ANGÉLICA", certificateURL: "https://drive.google.com/file/d/1t1wLOH0zOmMxXVgZxYrfIGlZPpGFa1CP/view?usp=sharing", password: "72481482" },
        { name: "CASTRO MARTIARENA PAOLA VERÓNICA", certificateURL: "https://drive.google.com/file/d/1ssyb4SqmSSRUTgAVGmkq0TmWyBIyUXda/view?usp=sharing", password: "71744204" },
        { name: "CUBA JAUREGUI CARLOS SANTIAGO", certificateURL: "https://drive.google.com/file/d/16VAHbeJfte4oEhXL027ujl66w0oqB-jH/view?usp=sharing", password: "77129498" },
        { name: "QUISPE LIMA POL SEBASTIAN", certificateURL: "https://drive.google.com/file/d/1f6nheoz4mgQrO2NqZ1XH2hipwnYBmBF5/view?usp=sharing", password: "7389715" },
        { name: "CORDOVA CANTORO VIOLETA", certificateURL: "https://drive.google.com/file/d/1TyhmKGsm4H-YGDbSjhpsqbxQqP1ei5mk/view?usp=sharing", password: "72712951" },
        { name: "MANUEL ABRAHAM PONCE FERNANDEZ BACA", certificateURL: "https://drive.google.com/file/d/1q4jA82IbDM6_2JCnPKLUVtsK_ELaLF4C/view?usp=sharing", password: "72716682" },
        { name: "GUZMÁN PACHECO ESTHER", certificateURL: "https://drive.google.com/file/d/1ACfy6jjP2D2HeU_U5M1J4qUUkYJ3ROMx/view?usp=sharing", password: "23998314" },
        { name: "CALDERON GONZALES WERNER", certificateURL: "https://drive.google.com/file/d/1Y1xxXBy2QJClsaJ_A-LCb_CBE0J6BWVc/view?usp=sharing", password: "41834778" },
        { name: "GUTIERREZ CARLOTTO ED", certificateURL: "https://drive.google.com/file/d/1IwmnOVEyiV7hBHO9AaduoyBhr1DB2s84/view?usp=sharing", password: "46086133" },
        { name: "CANAHUIRE MONTUFAR ABRAHAM EDGARD", certificateURL: "https://drive.google.com/file/d/1J9Zcqmpgo3mnN8J32HUKQfrJLimo4uWc/view?usp=sharing", password: "23961090" },
        { name: "HOLGUIN HERRERA MELISA BETYS", certificateURL: "https://drive.google.com/file/d/1MKmi7fSjtVMT5dItcS_b6j_D_waYl6-V/view?usp=sharing", password: "43109012" },
        { name: "ASTETE CALDERON GABRIELA", certificateURL: "https://drive.google.com/file/d/1ii2FABNVQFEAAj1MwCam0TSutU3Ic96m/view?usp=sharing", password: "70458417" },
        { name: "MARTINEZ ROJAS ERICK MIJAIL", certificateURL: "https://drive.google.com/file/d/1YeLXcfsx19vyr4CBqQf6U3eYC6WUtElp/view?usp=sharing", password: "46585463" },
        { name: "DELGADO OBANDO JANETTE", certificateURL: "https://drive.google.com/file/d/1YOI8DSKGq69GcpBDHeEhXaSXVP6tb3yl/view?usp=sharing", password: "23910380" }
    ];

    const studentsTableBody = document.getElementById("studentsTableBody");

    const openPdfWithPassword = (url, password) => {
        // Buscar el estudiante por contraseña
        const student = students.find(student => student.password === password);
        if (student) {
            // Abrir el PDF en una nueva ventana si la contraseña es correcta
            window.open(url, "_blank");
        } else {
            alert("Contraseña incorrecta");
        }
    };

    const renderStudents = (students) => {
        studentsTableBody.innerHTML = ""; // Limpiar tabla
        students.forEach((student, index) => {
            const row = document.createElement("tr");

            const nameCell = document.createElement("td");
            nameCell.textContent = student.name;

            const downloadCell = document.createElement("td");
            const downloadButton = document.createElement("button");
            downloadButton.textContent = "Descargar";
            downloadButton.className = "btn btn-primary btn-center"; // Utilizamos nuestras clases personalizadas de CSS
            downloadButton.addEventListener("click", () => {
                // Mostrar modal para ingresar contraseña antes de descargar el PDF
                const passwordModal = new bootstrap.Modal(document.getElementById("passwordModal"));
                passwordModal.show();

                // Al hacer clic en "Aceptar", verificar la contraseña e iniciar la descarga si es correcta
                document.getElementById("submitPasswordBtn").addEventListener("click", () => {
                    const passwordInput = document.getElementById("passwordInput").value;
                    openPdfWithPassword(student.certificateURL, passwordInput);
                    passwordModal.hide();
                });
            });
            downloadCell.appendChild(downloadButton);

            row.appendChild(nameCell);
            row.appendChild(downloadCell);

            studentsTableBody.appendChild(row);
        });
    };

    // Filtrar estudiantes según el término de búsqueda
    const searchInput = document.getElementById("searchInput");
    searchInput.addEventListener("input", () => {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredStudents = students.filter(student => student.name.toLowerCase().includes(searchTerm));
        renderStudents(filteredStudents);
    });

    // Renderizar todos los estudiantes al cargar la página
    renderStudents(students);
});
