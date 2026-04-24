export type TranslationKey =
    | 'NAV_HOME' | 'NAV_ORIGINS' | 'NAV_PROCESS' | 'NAV_PRODUCTS' | 'NAV_CONTACT' | 'NAV_ABOUT' | 'NAV_FAQ' | 'NAV_CEREMONY' | 'NAV_SUSTAINABILITY'
    | 'HERO_TITLE' | 'HERO_SUBTITLE' | 'HERO_CTA' | 'LOADING_TEXT'
    | 'EXPERIENCE_A_TITLE' | 'EXPERIENCE_A_DESC' | 'EXPERIENCE_A_TITLE_SPLIT'
    | 'EXPERIENCE_B_TITLE' | 'EXPERIENCE_B_DESC' | 'EXPERIENCE_B_TITLE_SPLIT'
    | 'EXPERIENCE_C_TITLE' | 'EXPERIENCE_C_DESC' | 'EXPERIENCE_C_TITLE_SPLIT'
    | 'EXPERIENCE_D_TITLE' | 'EXPERIENCE_D_DESC'
    | 'STATS_REGIONS' | 'STATS_REGIONS_LABEL' | 'STATS_STATIONS' | 'STATS_STATIONS_LABEL' | 'STATS_TONS' | 'STATS_TONS_LABEL' | 'STATS_TRACEABLE' | 'STATS_TRACEABLE_LABEL'
    | 'TRUSTED_BY'
    | 'CEREMONY_LABEL' | 'CEREMONY_TITLE' | 'CEREMONY_JEBENA' | 'CEREMONY_BLESSING' | 'CEREMONY_P1' | 'CEREMONY_P2' | 'CEREMONY_ABOL' | 'CEREMONY_ABOL_DESC' | 'CEREMONY_TONA' | 'CEREMONY_TONA_DESC' | 'CEREMONY_BARAKA' | 'CEREMONY_BARAKA_DESC'
    | 'PROCESS_LABEL' | 'PROCESS_TITLE' | 'PROCESS_STEP1_TITLE' | 'PROCESS_STEP1_DESC' | 'PROCESS_STEP2_TITLE' | 'PROCESS_STEP2_DESC' | 'PROCESS_STEP3_TITLE' | 'PROCESS_STEP3_DESC' | 'PROCESS_STEP4_TITLE' | 'PROCESS_STEP4_DESC'
    | 'PRODUCTS_LABEL' | 'PRODUCTS_HERITAGE_TITLE' | 'PRODUCT_NOTES' | 'PRODUCT_ALTITUDE' | 'PRODUCT_SAMPLE' | 'PRODUCT_GRADE_WASHED' | 'PRODUCT_GRADE_NATURAL' | 'PRODUCT_GRADE_HONEY'
    | 'SUSTAINABILITY_LABEL' | 'SUSTAINABILITY_TITLE' | 'SUSTAINABILITY_S1_TITLE' | 'SUSTAINABILITY_S1_DESC' | 'SUSTAINABILITY_S2_TITLE' | 'SUSTAINABILITY_S2_DESC' | 'SUSTAINABILITY_S3_TITLE' | 'SUSTAINABILITY_S3_DESC' | 'SUSTAINABILITY_S4_TITLE' | 'SUSTAINABILITY_S4_DESC'
    | 'TESTIMONIALS_TITLE' | 'TESTIMONIALS_TITLE_HIGHLIGHT' | 'TESTIMONIAL_Q1' | 'TESTIMONIAL_Q2' | 'TESTIMONIAL_Q3' | 'TESTIMONIAL_Q4'
    | 'FAQ_LABEL' | 'FAQ_TITLE' | 'FAQ_SUBTITLE' | 'FAQ_CTA_TEXT' | 'FAQ_CTA_BUTTON' | 'FAQ_Q1' | 'FAQ_A1' | 'FAQ_Q2' | 'FAQ_A2' | 'FAQ_Q3' | 'FAQ_A3' | 'FAQ_Q4' | 'FAQ_A4'
    | 'CONTACT_LABEL' | 'CONTACT_HERO_TITLE' | 'CONTACT_DESC' | 'CONTACT_HQ' | 'CONTACT_HQ_VAL' | 'CONTACT_DIRECT' | 'CONTACT_EMAIL_LABEL' | 'CONTACT_FORM_COMPANY' | 'CONTACT_FORM_COMPANY_PLACEHOLDER' | 'CONTACT_FORM_FIRSTNAME' | 'CONTACT_FORM_LOCATION' | 'CONTACT_FORM_PHONE' | 'CONTACT_FORM_PHONE_PLACEHOLDER'
    | 'CONTACT_FORM_TRUST_SECURE' | 'CONTACT_FORM_EMAIL'
    | 'CONTACT_FORM_VOLUME' | 'CONTACT_FORM_VOLUME_PLACEHOLDER' | 'CONTACT_VOLUME_CUSTOM' | 'CONTACT_VOLUME_CUSTOM_PLACEHOLDER' | 'CONTACT_FORM_SPECS' | 'CONTACT_FORM_SPECS_PLACEHOLDER' | 'CONTACT_FORM_SUBMIT'
    | 'CONTACT_THANK_YOU' | 'CONTACT_THANK_YOU_DESC' | 'CONTACT_SUBMIT_ANOTHER' | 'CONTACT_RATE_LIMIT' | 'CONTACT_RATE_LIMIT_DESC'
    | 'FOOTER_DESC' | 'FOOTER_TRACEABILITY' | 'FOOTER_SUPPORT' | 'FOOTER_NEWSLETTER' | 'FOOTER_NEWSLETTER_DESC' | 'FOOTER_EMAIL_PLACEHOLDER' | 'FOOTER_JOIN' | 'FOOTER_RIGHTS' | 'FOOTER_MADE_BY' | 'FOOTER_PRIVACY' | 'FOOTER_TERMS'
    | 'GALLERY_LABEL' | 'GALLERY_TITLE_1' | 'GALLERY_TITLE_2' | 'GALLERY_STEP_LABEL' | 'GALLERY_ITEM1_TITLE' | 'GALLERY_ITEM1_DESC' | 'GALLERY_ITEM2_TITLE' | 'GALLERY_ITEM2_DESC' | 'GALLERY_ITEM3_TITLE' | 'GALLERY_ITEM3_DESC' | 'GALLERY_ITEM4_TITLE' | 'GALLERY_ITEM4_DESC' | 'GALLERY_ITEM5_TITLE' | 'CONTACT_VOLUME_1_5' | 'CONTACT_VOLUME_5_10' | 'CONTACT_VOLUME_10_PLUS' | 'SCROLL_TO_DISCOVER'
    | 'TOAST_STEP1_TITLE' | 'TOAST_STEP1_DESC' | 'TOAST_STEP2_TITLE' | 'TOAST_STEP2_PLACEHOLDER' | 'TOAST_STEP2_BUTTON' | 'TOAST_SUCCESS' | 'TOAST_SUCCESS_DESC'
    | 'HERITAGE_LABEL' | 'HERITAGE_TITLE' | 'HERITAGE_P1' | 'HERITAGE_P2'
    | 'PRODUCTS_TITLE' | 'PRODUCTS_SUBTITLE'
    | 'PRODUCT_YIRGACHEFFE' | 'PRODUCT_SIDAMO' | 'PRODUCT_GUJI' | 'PRODUCT_HARRAR'
    | 'CONTACT_TITLE' | 'CONTACT_SUBTITLE' | 'CONTACT_NAME' | 'CONTACT_EMAIL' | 'CONTACT_MESSAGE' | 'CONTACT_SEND'
    | 'ABOUT_TITLE' | 'ABOUT_SUBTITLE' | 'ABOUT_HERITAGE' | 'ABOUT_EXCELLENCE' | 'ABOUT_P1' | 'ABOUT_P2' | 'ABOUT_FOUNDED' | 'ABOUT_LOCATION' | 'TEAM_TITLE'
    | 'PACKAGING_LABEL' | 'PACKAGING_TITLE' | 'PACKAGING_TITLE_HIGHLIGHT' | 'PACKAGING_DESC' | 'PACKAGING_FEAT_1' | 'PACKAGING_FEAT_2' | 'PACKAGING_FEAT_3' | 'PACKAGING_FEAT_4' | 'PACKAGING_CTA' | '3D_INTERACT_PROMPT';

export const translations: Record<string, { en: string; am: string }> = {
    // Navbar
    NAV_HOME: { en: 'Home', am: 'ቤት' },
    NAV_ORIGINS: { en: 'Origins', am: 'መነሻዎች' },
    NAV_PROCESS: { en: 'Process', am: 'ሂደት' },
    NAV_CONTACT: { en: 'Contact', am: 'ግንኙነት' },
    NAV_ABOUT: { en: 'About Us', am: 'ስለ እኛ' },
    NAV_FAQ: { en: 'FAQs', am: 'ጥያቄዎች' },
    NAV_PRODUCTS: { en: 'Products', am: 'ምርቶች' },
    NAV_CEREMONY: { en: 'Ceremony', am: 'ሥነ ሥርዓት' },
    NAV_SUSTAINABILITY: { en: 'Sustainability', am: 'ዘላቂነት' },

    // Hero / Experience
    HERO_TITLE: { en: 'YGF COFFEE', am: 'ዋይጂኤፍ ቡና' },
    HERO_SUBTITLE: { en: 'ETHIOPIAN EXCELLENCE', am: 'የኢትዮጵያ ልቀት' },
    HERO_CTA: { en: 'Explore the bean', am: 'ቡናውን ይመርምሩ' },
    LOADING_TEXT: { en: 'Roasting the bean...', am: 'ብና እየተቆላ ነው' },

    EXPERIENCE_A_TITLE: { en: 'Rooted In Ethiopia', am: 'ስራችን ከኢትዮጵያ' },
    EXPERIENCE_A_TITLE_SPLIT: { en: 'Traded WorldWide', am: 'ለዓለም ገበያ' },
    EXPERIENCE_A_DESC: { en: 'From the misty highlands of Ethiopia, the birthplace of Arabica.', am: 'ከጣፋጭ የኢትዮጵያ ደጋማ ቦታዎች፣ የአረቢካ ቡና ምንጭ።' },

    EXPERIENCE_B_TITLE: { en: 'HAND SELECTED', am: 'በእጅ የተመረጠ' },
    EXPERIENCE_B_TITLE_SPLIT: { en: 'HAND SELECTED', am: 'በእጅ የተመረጠ' },
    EXPERIENCE_B_DESC: { en: 'Each cherry is picked at peak ripeness to ensure unparalleled profile complexity.', am: 'እያንዳንዱ ፍሬ ወደ እርስዎ ኩባያ የሚደርሰው ምርጥ ቡና ብቻ መሆኑን ለማረጋገጥ በእጅ ይመረመራል።' },

    EXPERIENCE_C_TITLE: { en: 'MASTER ROASTED', am: 'በባለሙያ የተቆላ' },
    EXPERIENCE_C_TITLE_SPLIT: { en: 'MASTER ROASTED', am: 'በባለሙያ የተቆላ' },
    EXPERIENCE_C_DESC: { en: 'Precision-engineered heat reveals the hidden notes of jasmine, bergamot, and chocolate.', am: 'በባለሙያ የተመረጠ ሙቀት የጃስሚን፣ የቤርጋሞት እና የቸኮሌት ድብቅ ጣዕሞችን ያወጣል።' },

    EXPERIENCE_D_TITLE: { en: 'DIRECT EXPORT', am: 'ቀጥታ ኤክስፖርት' },
    EXPERIENCE_D_DESC: { en: 'Bringing the crown jewel of Ethiopian heritage to the global stage.', am: 'የኢትዮጵያን የቅርስ ዕንቁ ወደ ዓለም አቀፍ ደረጃ እናመጣለን።' },

    // Stats
    STATS_REGIONS: { en: '15+', am: '፲፭+' },
    STATS_REGIONS_LABEL: { en: 'Coffee Regions', am: 'የቡና ክልሎች' },
    STATS_STATIONS: { en: '50+', am: '፶+' },
    STATS_STATIONS_LABEL: { en: 'Washing Stations', am: 'የመታጠቢያ ጣቢያዎች' },
    STATS_TONS: { en: '10k+', am: '፲ሺ+' },
    STATS_TONS_LABEL: { en: 'Tons Exported', am: 'ኤክስፖርት የተደረገ' },
    STATS_TRACEABLE: { en: '100%', am: '፻%' },
    STATS_TRACEABLE_LABEL: { en: 'Traceable', am: 'ምንጩ የሚታወቅ' },

    // Trusted By
    TRUSTED_BY: { en: 'Trusted By', am: 'አጋሮቻችን' },

    // Ceremony
    CEREMONY_LABEL: { en: 'Cultural Heritage', am: 'የባህል ቅርስ' },
    CEREMONY_TITLE: { en: 'The Coffee Ceremony', am: 'የቡና ሥነ ሥርዓት' },
    CEREMONY_JEBENA: { en: 'The Jebena Buna', am: 'የጀበና ቡና' },
    CEREMONY_BLESSING: { en: 'Where coffee is not a beverage, but a blessing.', am: 'ቡና መጠጥ ብቻ ሳይሆን ምርቃት በሆነበት ቦታ።' },
    CEREMONY_P1: { en: 'In Ethiopia, coffee is the heart of community. For centuries, the daily coffee ceremony has brought neighbors, friends, and families together.', am: 'በኢትዮጵያ ቡና የማህበረሰብ ህይወት፣ የመከባበር እና የእንግዳ ተቀባይነት መሰረት ነው። ለዘመናት የኢትዮጵያ ቡና ስነ-ስርዓት ጎረቤቶችን እና ቤተሰቦችን የሚያገናኝ የየቀኑ ተግባር ነው።' },
    CEREMONY_P2: { en: 'From washing the raw beans to hand-roasting them over hot coals, every step is a ritual. We bring that same care and intention to every lot we export.', am: 'ጥሬ አረንጓዴውን ቡና ከማጠብ አንስቶ በፍም ላይ እስኪቆላ ድረስ መዓዛው ክፍሉን ይሞላዋል። እኛ ደግሞ ይህንን ጥንቃቄ እና ክብር ለዓለም በምንልከው እያንዳንዱ የቡና ምርት ላይ እናሳያለን።' },
    CEREMONY_ABOL: { en: '1. Abol (አቦል)', am: '፩. አቦል' },
    CEREMONY_ABOL_DESC: { en: 'The first round—strongest, richest, symbolizing spirit and truth.', am: 'የመጀመሪያው ዙር—በጣም ጠንካራ እና ጣፋጭ፣ መንፈስን እና እውነትን የሚወክል ነው።' },
    CEREMONY_TONA: { en: '2. Tona (ቶና)', am: '፪. ቶና' },
    CEREMONY_TONA_DESC: { en: 'The second pour—milder, representing deep conversation and connection.', am: 'ሁለተኛው ዙር—መካከለኛ፣ ጥልቅ ውይይትን እና ግንኙነትን የሚወክል ነው።' },
    CEREMONY_BARAKA: { en: '3. Baraka (በረካ)', am: '፫. በረካ' },
    CEREMONY_BARAKA_DESC: { en: 'The final blessing—bestowing grace upon those who share the cup.', am: 'የመጨረሻው ምርቃት—ጽዋውን ለሚካፈሉ ሁሉ ጸጋን የሚሰጥ ነው።' },

    // Process
    PROCESS_LABEL: { en: 'The Method', am: 'ዘዴው' },
    PROCESS_TITLE: { en: 'FARM TO CUP', am: 'ከእርሻ እስከ ኩባያ' },
    PROCESS_STEP1_TITLE: { en: 'SOURCING', am: 'ምንጭ መለየት' },
    PROCESS_STEP1_DESC: { en: 'Partnering directly with generation-honed smallholder farmers.', am: 'ከፍተኛ ልምድ ካላቸው አነስተኛ ገበሬዎች ጋር በቀጥታ እንሰራለን።' },
    PROCESS_STEP2_TITLE: { en: 'WASHING', am: 'ማጠብ' },
    PROCESS_STEP2_DESC: { en: 'Meticulous fermentation and mountain spring water processing.', am: 'ጥንቃቄ የተሞላበት የመፍላት ሂደት እና የተፈጥሮ ምንጭ ውሃ አጠቃቀም።' },
    PROCESS_STEP3_TITLE: { en: 'DRYING', am: 'ማድረቅ' },
    PROCESS_STEP3_DESC: { en: 'Slow sun-drying on raised African beds for perfect humidity control.', am: 'በአልጋ ላይ በተዘረጋ አየር ውስጥ በፀሐይ ቀስ ብሎ የሚደርቅ።' },
    PROCESS_STEP4_TITLE: { en: 'EXPORT', am: 'ኤክስፖርት' },
    PROCESS_STEP4_DESC: { en: 'Premium packaging bridging Ethiopian heritage to global roasteries.', am: 'የኢትዮጵያን ቅርስ ለዓለም አቀፍ ገበያ በሚያበቁ ማሸጊያዎች እናቀርባለን።' },

    // Products
    PRODUCTS_LABEL: { en: 'The Collection', am: 'ስብስቦች' },
    PRODUCTS_HERITAGE_TITLE: { en: 'OUR OFFERINGS', am: 'የምናቀርባቸው' },
    PRODUCT_NOTES: { en: 'Notes', am: 'ጣዕሞች' },
    PRODUCT_ALTITUDE: { en: 'Altitude', am: 'ከፍታ' },
    PRODUCT_SAMPLE: { en: 'Request Sample', am: 'ናሙና ይጠይቁ' },
    PRODUCT_GRADE_WASHED: { en: 'Grade 1 Washed', am: 'ደረጃ ፩ የታጠበ' },
    PRODUCT_GRADE_NATURAL: { en: 'Grade 1 Natural', am: 'ደረጃ ፩ ተፈጥሯዊ' },
    PRODUCT_GRADE_HONEY: { en: 'Grade 1 Honey', am: 'ደረጃ ፩ ሀኒ' },
    PRODUCTS_TITLE: { en: 'Our Premium Selection', am: 'የእኛ ልዩ ምርጫዎች' },
    PRODUCTS_SUBTITLE: { en: 'Carefully curated coffee beans from the finest regions of Ethiopia.', am: 'ከምርጥ የኢትዮጵያ ክልሎች በጥንቃቄ የተመረጡ የቡና ፍሬዎች።' },
    PRODUCT_YIRGACHEFFE: { en: 'Yirgacheffe', am: 'ይርጋጨፌ' },
    PRODUCT_SIDAMO: { en: 'Sidamo', am: 'ሲዳሞ' },
    PRODUCT_GUJI: { en: 'Guji', am: 'ጉጂ' },
    PRODUCT_HARRAR: { en: 'Harrar', am: 'ሐረር' },

    // Sustainability
    SUSTAINABILITY_LABEL: { en: 'Our Core Values', am: 'መሰረታዊ እሴቶቻችን' },
    SUSTAINABILITY_TITLE: { en: 'Grown with Respect', am: 'በክብር የበቀለ' },
    SUSTAINABILITY_S1_TITLE: { en: 'Sustainability', am: 'ዘላቂነት' },
    SUSTAINABILITY_S1_DESC: { en: 'We support organic farming to protect the land while producing exceptional harvests.', am: 'ደንን ሳይነኩ ከፍተኛ ምርት ለማግኘት የሚያስችል የተፈጥሮ እርሻን እናስፋፋለን።' },
    SUSTAINABILITY_S2_TITLE: { en: 'Fully Traceable', am: 'ሙሉ በሙሉ የሚታወቅ' },
    SUSTAINABILITY_S2_DESC: { en: 'Every lot is tracked from farm to export — full transparency, every step.', am: 'ከመትከል እስከ ኤክስፖርት ያለውን ሂደት ሙሉ በሙሉ መከታተል የሚያስችል አሰራር።' },
    SUSTAINABILITY_S3_TITLE: { en: 'Community Based', am: 'ማህበረሰብ ተኮር' },
    SUSTAINABILITY_S3_DESC: { en: 'We pay our farmers fairly and invest in the communities behind every bean.', am: 'የገበሬው ተጠቃሚነት እና ፍትሃዊ ክፍያ ላይ ትከረት በማድረግ ማህበራዊ ኑሮውን እናሻሽላለን።' },
    SUSTAINABILITY_S4_TITLE: { en: 'Artisan Selection', am: 'ልዩ ምርጫ' },
    SUSTAINABILITY_S4_DESC: { en: 'Hand-picked, carefully processed, and quality tested — every single season.', am: 'ለየት ያሉ የዝግጅት ሂደቶችን በመጠቀም ዘወትር ጥራት ያለው ምርት እናቀርባለን።' },

    // Testimonials
    TESTIMONIALS_TITLE: { en: 'Valued ', am: 'በዓለም ዙሪያ ' },
    TESTIMONIALS_TITLE_HIGHLIGHT: { en: 'worldwide', am: 'ውድነት ያተረፉ' },
    TESTIMONIAL_Q1: { en: 'YGF Coffee consistently delivers the highest scoring lots we source from Africa. Their Yirgacheffe is a staple in our premium blend.', am: 'ዋይጂኤፍ ኮፊ ከአፍሪካ ከምናገኛቸው ምርጥ ቡናዎች መካከል ዘወትር ከፍተኛ ውጤት ያለውን ያቀርብልናል። ይርጋጨፌያቸው የእኛ የጥራት መለኪያ ነው።' },
    TESTIMONIAL_Q2: { en: 'The transparency and traceability they offer is unmatched. And the cup profile—vibrant, floral, and deeply complex—speaks for itself.', am: 'የሚያቀርቡት ግልጽነት እና ተከታታይነት አቻ የለውም። የቡናው ጣዕም—ልዩ እና ጥልቅ ውስብስብነት ያለው—ስለ ራሱ ይናገራል።' },
    TESTIMONIAL_Q3: { en: 'Partnering with YGF means we are supporting true sustainable practices in Sidamo. The beans are impeccable, year after year.', am: 'ከዋይጂኤፍ ጋር መስራት ሲዳሞ ውስጥ እውነተኛ ዘላቂነት ያለው ስራን መደገፍ ነው። ቡናው በየዓመቱ እንከን የለሽ ነው።' },
    TESTIMONIAL_Q4: { en: 'We blind-cupped their Harrar against five other exporters, and YGF won unanimously. The blueberry notes were phenomenal.', am: 'ሐረር ቡናቸውን ከሌሎች አምስት ላኪዎች ጋር አወዳድረን ዋይጂኤፍ ያለ ምንም ጥርጥር አሸንፏል። የጣዕም ሚዛኑ አስደናቂ ነበር።' },

    // Contact
    CONTACT_TITLE: { en: 'Partner With Us', am: 'ከእኛ ጋር ይስሩ' },
    CONTACT_SUBTITLE: { en: 'Ready to bring Ethiopian excellence to your roastery?', am: 'የኢትዮጵያን ቡና ወደ ቆላ ማሽንዎ ለማምጣት ዝግጁ ነዎት?' },
    CONTACT_NAME: { en: 'Your Name', am: 'ስምዎ' },
    CONTACT_EMAIL: { en: 'Email Address', am: 'የኢሜል አድራሻ' },
    CONTACT_MESSAGE: { en: 'Your Message', am: 'መልእክትዎ' },
    CONTACT_SEND: { en: 'Send Request', am: 'ጥያቄ ይላኩ' },
    CONTACT_LABEL: { en: 'Get in Touch', am: 'ያግኙን' },
    CONTACT_HERO_TITLE: { en: 'Partner With YGF', am: 'ከዋይጂኤፍ ጋር ይስሩ' },
    CONTACT_DESC: { en: 'Ready to bring the finest Ethiopian profiles to your roastery? Let\'s discuss your volume needs and specifications.', am: 'ምርጥ የኢትዮጵያ ቡናን ወደ ቆላ ማሽንዎ ለማምጣት ዝግጁ ነዎት? ስለ ፍላጎትዎ እንወያይ።' },
    CONTACT_HQ: { en: 'Headquarters', am: 'ዋና መስሪያ ቤት' },
    CONTACT_HQ_VAL: { en: 'Addis Ababa, Ethiopia', am: 'አዲስ አበባ፣ ኢትዮጵያ' },
    CONTACT_DIRECT: { en: 'Direct Inquiry', am: 'ቀጥታ ጥያቄ' },
    CONTACT_EMAIL_LABEL: { en: 'Email', am: 'ኢሜል' },
    CONTACT_FORM_COMPANY: { en: 'Company Name', am: 'የድርጅት ስም' },
    CONTACT_FORM_COMPANY_PLACEHOLDER: { en: 'Enter your company', am: 'የድርጅትዎን ስም ያስገቡ' },
    CONTACT_FORM_FIRSTNAME: { en: 'Contact Name', am: 'ያጋዥ ስም' },
    CONTACT_FORM_LOCATION: { en: 'Location', am: 'አድራሻ' },
    CONTACT_FORM_VOLUME: { en: 'How much coffee do you need?', am: 'የፍላጎት መጠን' },
    CONTACT_FORM_VOLUME_PLACEHOLDER: { en: 'Select volume', am: 'መጠን ይምረጡ' },
    CONTACT_FORM_SPECS: { en: 'Tell us about your roasting needs', am: 'ስለ ፍላጎትዎ ይንገሩን' },
    CONTACT_FORM_SPECS_PLACEHOLDER: { en: 'Any specific variety, grade, or flavor profile?', am: 'የሚፈልጉት ልዩ አይነት ወይም ደረጃ አለ?' },
    CONTACT_FORM_SUBMIT: { en: 'Get Wholesale Quote', am: 'የጅምላ ዋጋ ይጠይቁ' },
    CONTACT_FORM_TRUST_SECURE: { en: 'Your information is secure. We usually respond within 24 hours.', am: 'መረጃዎ ደህንነቱ የተጠበቀ ነው። ብዙውን ጊዜ በ24 ሰዓታት ውስጥ ምላሽ እንሰጣለን።' },
    CONTACT_FORM_EMAIL: { en: 'Email Address', am: 'የኢሜል አድራሻ' },
    CONTACT_FORM_PHONE: { en: 'Phone', am: 'ስልክ' },
    CONTACT_FORM_PHONE_PLACEHOLDER: { en: '+1 (555) 123-4567', am: '+251 9XX XXX XXXX' },
    CONTACT_VOLUME_1_5: { en: '1 - 5 Container Loads', am: 'ከ1 - 5 ኮንቴይነር' },
    CONTACT_VOLUME_5_10: { en: '5 - 10 Container Loads', am: 'ከ5 - 10 ኮንቴይነር' },
    CONTACT_VOLUME_10_PLUS: { en: '10+ Container Loads', am: 'ከ10 በላይ ኮንቴይነር' },
    CONTACT_VOLUME_CUSTOM: { en: 'Custom Volume', am: 'ሌላ መጠን' },
    CONTACT_VOLUME_CUSTOM_PLACEHOLDER: { en: 'Enter your custom volume...', am: 'የሚፈልጉትን መጠን ያስገቡ...' },
    CONTACT_THANK_YOU: { en: 'Thank You!', am: 'አመሰግናለሁ!' },
    CONTACT_THANK_YOU_DESC: { en: 'Your inquiry has been received. We will get back to you within 24 hours.', am: 'ጥያቄዎ ደርሶናል። በ24 ሰዓታት ውስጥ ምላሽ እንሰጣለን።' },
    CONTACT_SUBMIT_ANOTHER: { en: 'Submit Another Inquiry', am: 'ሌላ ጥያቄ ያስገቡ' },
    CONTACT_RATE_LIMIT: { en: 'Please Wait', am: 'እባክዎ ይጠብቁ' },
    CONTACT_RATE_LIMIT_DESC: { en: 'You have already submitted 2 inquiries in the last 24 hours. Please try again later or contact us directly via WhatsApp.', am: 'ባለፉት 24 ሰዓታት 2 ጥያቄዎችን አስገብተዋል። እባክዎ ቆይተው ይሞክሩ ወይም በWhatsApp ያግኙን።' },

    // Toast Popup
    TOAST_STEP1_TITLE: { en: 'Looking for Wholesale?', am: 'የጅምላ ዋጋ ይፈልጋሉ?' },
    TOAST_STEP1_DESC: { en: 'Roughly how much coffee do you need?', am: 'በግምት ምን ያህል ቡና ይፈልጋሉ?' },
    TOAST_STEP2_TITLE: { en: 'Where should we send the pricing?', am: 'የዋጋ ዝርዝሩን የት እንላክሎት?' },
    TOAST_STEP2_PLACEHOLDER: { en: 'Email or Phone number', am: 'ኢሜል አሊያም ስልክ ቁጥር' },
    TOAST_STEP2_BUTTON: { en: 'Get Pricing', am: 'ዋጋ ይጠይቁ' },
    TOAST_SUCCESS: { en: "Received. We'll be in touch shortly.", am: 'ተቀብለናል፡፡ በቅርቡ እናገኝዎታለን።' },
    TOAST_SUCCESS_DESC: { en: 'We will be in touch shortly.', am: 'በቅርቡ እናገኝዎታለን።' },

    // Footer
    FOOTER_DESC: { en: 'Ethiopian specialty coffee, sourced with care and exported to the world\'s finest roasters.', am: 'ምርጥ የኢትዮጵያ ቡናን በማምረት እና በመላክ ላይ እንሰራለን። ከእርሻ እስከ ኩባያ የማይደራደር ጥራት።' },
    FOOTER_TRACEABILITY: { en: 'Traceability', am: 'ምንጭነት' },
    FOOTER_SUPPORT: { en: 'Support', am: 'ድጋፍ' },
    FOOTER_NEWSLETTER: { en: 'Newsletter', am: 'ዜና መጽሔት' },
    FOOTER_NEWSLETTER_DESC: { en: 'Join our list for harvest updates and new arrivals.', am: 'ለቅርብ ጊዜ መረጃዎች የእኛን ዝርዝር ይቀላቀሉ።' },
    FOOTER_EMAIL_PLACEHOLDER: { en: 'your@email.com', am: 'ኢሜልዎ' },
    FOOTER_JOIN: { en: 'Join', am: 'ይቀላቀሉ' },
    FOOTER_RIGHTS: { en: 'All rights reserved.', am: 'መብቱ በህግ የተጠበቀ ነው።' },
    FOOTER_MADE_BY: { en: 'Made By Bemnet Mitiku.', am: 'Made By Bemnet Mitiku.' },
    FOOTER_PRIVACY: { en: 'Privacy Policy', am: 'የግላዊነት ፖሊሲ' },
    FOOTER_TERMS: { en: 'Terms of Service', am: 'የአገልግሎት ውሎች' },

    // FAQ
    FAQ_LABEL: { en: 'Knowledge Base', am: 'መረጃ' },
    FAQ_TITLE: { en: 'Common Questions', am: 'የተለመዱ ጥያቄዎች' },
    FAQ_SUBTITLE: { en: 'Everything you need to know about partnering with YGF Coffee.', am: 'ስለ ዋይጂኤፍ ቡና ማወቅ ያለብዎት ነገር ሁሉ እዚህ ይገኛል።' },
    FAQ_CTA_TEXT: { en: 'Still have questions?', am: 'ሌላ ጥያቄ አለዎት?' },
    FAQ_CTA_BUTTON: { en: 'Contact Support', am: 'ድጋፍ ያግኙ' },
    FAQ_Q1: { en: 'What is your minimum order quantity?', am: 'ዝቅተኛው የትዕዛዝ መጠን ስንት ነው?' },
    FAQ_A1: { en: 'We typically work with container-level exports, but we can arrange smaller specialty lots for established partners.', am: 'ብዙውን ጊዜ በኮንቴይነር ደረጃ እንልካለን፣ ነገር ግን ለቋሚ ደንበኞቻችን አነስተኛ ምርቶችን እናዘጋጃለን።' },
    FAQ_Q2: { en: 'Which regions do you source from?', am: 'ቡናውን ከየትኛው ክልል ነው የሚያመጡት?' },
    FAQ_A2: { en: 'We source from the most celebrated regions including Yirgacheffe, Sidamo, Guji, and Harrar.', am: 'ይርጋጨፌን፣ ሲዳሞን፣ ጉጂን እና ሐረርን ጨምሮ ከታወቁ የቡና ክልሎች እናመጣለን።' },
    FAQ_Q3: { en: 'Do you provide samples?', am: 'ናሙና ትሰጣላችሁ?' },
    FAQ_A3: { en: 'Yes, we provide green bean samples to serious buyers to ensure clear quality alignment before contract.', am: 'አዎ፣ ከስምምነት በፊት ለገዢዎች የአረንጓዴ ቡና ናሙናዎችን እናቀርባለን።' },
    FAQ_Q4: { en: 'How do you ensure traceability?', am: 'የቡናውን ምንጭ እንዴት ማወቅ ይቻላል?' },
    FAQ_A4: { en: 'Every lot is tagged and tracked from the specific farm or washing station to the global port.', am: 'እያንዳንዱ ምርት ከእርሻ ወይም ከመታጠቢያ ጣቢያ ጀምሮ እስከ ወደብ ድረስ ክትትል ይደረግበታል።' },

    // About
    ABOUT_TITLE: { en: 'Our Journey', am: 'የእኛ ጉዞ' },
    ABOUT_SUBTITLE: { en: 'Rooted in tradition, driven by quality, committed to sustainable Ethiopian coffee export.', am: 'በባህል ላይ የተመሰረተ፣ በጥራት የሚመራ፣ ለዘላቂ የኢትዮጵያ ቡና ኤክስፖርት ቁርጠኛ።' },
    ABOUT_HERITAGE: { en: 'FAMILY', am: 'ቤተሰብ' },
    ABOUT_EXCELLENCE: { en: 'EXCELLENCE', am: 'ልቀት' },
    ABOUT_P1: { en: 'YGF is a family-run Ethiopian coffee export business based in Addis Ababa. We are built on three generations of care, taking our name from our founders: Yishak, Yacob, Yoseph, Girum, and Faith.', am: 'ዋይጂኤፍ በአዲስ አበባ የሚገኝ የሶስት ትውልድ ዕውቀትና ጥንቃቄ ላይ የተመሰረተ የኢትዮጵያ ቡና ኤክስፖርት ቤተሰባዊ ድርጅት ነው። ስሙ ከቤተሰብ መስራቾች ስም የተገኘ ነው — ይስሃቅ፣ ያዕቆብ፣ ዮሴፍ፣ ግሩም እና ፌይዝ።' },
    ABOUT_P2: { en: 'We export the best green coffee from Ethiopia\'s top regions to roasters worldwide. Our coffee is carefully chosen and easy to trace. We focus on building strong, simple partnerships with people who want great coffee direct from the source.', am: 'ከምርጥ የኢትዮጵያ የቡና ክልሎች የተመረጠ አረንጓዴ ቡና ለዓለም እናቀርባለን። እያንዳንዱ ምርት በጥንቃቄ የተመረጠ እና ምንጩ የሚታወቅ ነው። ጥራት ያለው ቡና በቀጥታ ከምንጩ ለሚፈልጉ ደንበኞቻችን ዘላቂ ትብብር ለመፍጠር እንሰራለን።' },
    ABOUT_FOUNDED: { en: 'Est. 2012', am: 'እ.ኤ.አ. በ፳፻፲፪ የተመሰረተ' },
    ABOUT_LOCATION: { en: 'Addis Ababa, ETH', am: 'አዲስ አበባ፣ ኢትዮጵያ' },
    TEAM_TITLE: { en: 'Meet Our Team', am: 'ቡድናችንን ይተዋወቁ' },

    // Gallery
    GALLERY_LABEL: { en: 'Our Heritage', am: 'ቅርሳችን' },
    GALLERY_TITLE_1: { en: 'The Process in', am: 'ሂደቱ በ' },
    GALLERY_TITLE_2: { en: 'Pictures', am: 'ምስል' },
    GALLERY_STEP_LABEL: { en: 'Step', am: 'ደረጃ' },
    GALLERY_ITEM1_TITLE: { en: 'The Origin', am: 'ምንጩ' },
    GALLERY_ITEM1_DESC: { en: 'Grown in the high-altitude forests of Ethiopia, where volcanic soil and ideal climate produce the world\'s finest Arabica.', am: 'ጽሩ የምርት ምንጭ የሆነው የኢትዮጵያ ከፍተኛ ቦታዎች ላይ የሚገኘው ለም የፈነዳ እሳተ ገሞራ አፈር ነው።' },
    GALLERY_ITEM2_TITLE: { en: 'Careful Harvest', am: 'ጥንቃቄ የተሞላበት ምርት' },
    GALLERY_ITEM2_DESC: { en: 'Every cherry is hand-picked at the right moment and sorted by experienced farmers — only the best makes the cut.', am: 'እያንዳንዱ የቡና ፍሬ በትክክለኛው ጊዜ በእጅ ይመረጣል።' },
    GALLERY_ITEM3_TITLE: { en: 'Washing & Processing', am: 'እጥበት እና ዝግጅት' },
    GALLERY_ITEM3_DESC: { en: 'Beans are carefully washed and processed to bring out their clean, rich flavors.', am: 'የቡና ፍሬዎች በጥራት እንዲዘጋጁ ይደረጋል።' },
    GALLERY_ITEM4_TITLE: { en: 'Quality Control', am: 'የጥራት ቁጥጥር' },
    GALLERY_ITEM4_DESC: { en: 'Our experts cup and test every lot for aroma, body, and flavor — nothing ships unless it\'s perfect.', am: 'ባለሙያዎች የቡናውን ጥራት ደረጃ በደረጃ ያረጋግጣሉ።' },
    GALLERY_ITEM5_TITLE: { en: 'Ready for the World', am: 'ለዓለም ገበያ የቀረበ' },
    GALLERY_ITEM5_DESC: { en: 'Sealed in premium export bags to lock in freshness on the journey to your roastery.', am: 'ለዓለም አቀፍ ገበያ እንዲቀርብ በጥንቃቄ ይዘጋጃል።' },

    // Misc
    SCROLL_TO_DISCOVER: { en: 'Scroll to Discover', am: 'ለማሰስ ወደ ታች ይውረዱ' },

    // Heritage Section
    HERITAGE_LABEL: { en: 'Where It All Began', am: 'ሁሉም የጀመረበት' },
    HERITAGE_TITLE: { en: 'The Legend of Ethiopian Coffee', am: 'የኢትዮጵያ ቡና ታሪክ' },
    HERITAGE_P1: { en: 'Over a thousand years ago in the forests of Kaffa, a young goat herder named Kaldi noticed his goats dancing with unusual energy after eating bright red berries from a wild shrub. Curious, he tried them himself — and felt a rush of clarity and warmth he had never known.', am: 'ከአንድ ሺህ ዓመታት በፊት በካፋ ደኖች ውስጥ ካልዲ የተባለ ወጣት እረኛ ፍየሎቹ ከዱር ቁጥቋጦ ላይ ቀይ ፍሬዎችን ከበሉ በኋላ ባልተለመደ ጉልበት ሲዘሉ አየ። በጉጉት ፍሬዎቹን ቀምሶ ያልተለመደ ንቃት እና ሙቀት ተሰማው።' },
    HERITAGE_P2: { en: 'He brought the berries to a local monastery, where monks brewed them into a drink that kept them alert through long hours of prayer. Word spread from village to village, across borders and oceans — and the world\'s love affair with coffee began right here, in Ethiopia.', am: 'ፍሬዎቹን ወደ አቅራቢያው ገዳም ወስዶ መነኮሳቱ በረጅም ጸሎት ሰዓታት ንቁ የሚያደርግ መጠጥ አዘጋጁ። ዜናው ከመንደር ወደ መንደር፣ ከድንበር ባሻገር ተሰራጭቷል — የዓለም የቡና ፍቅር እዚህ ኢትዮጵያ ውስጥ ተጀመረ።' },

    // Packaging 3D Viewer
    PACKAGING_LABEL: { en: 'Signature Packaging', am: 'ልዩ ማሸጊያ' },
    PACKAGING_TITLE: { en: 'The Art of', am: 'የጥበብ' },
    PACKAGING_TITLE_HIGHLIGHT: { en: 'Presentation', am: 'አቀራረብ' },
    PACKAGING_DESC: { en: 'Our export-grade coffee deserves export-grade packaging. We use premium, zero-oxygen-transfer bags to ensure the complex flavor profiles of our Ethiopian specialty beans remain perfectly preserved from our roastery to your cup.', am: 'የእኛ ኤክስፖርት ደረጃ ያለው ቡና የኤክስፖርት ደረጃ ያለው ማሸጊያ ይገባዋል። የኢትዮጵያ ልዩ ቡናችን ውስብስብ ጣዕም ከቆላ ማሽናችን እስከ ኩባያዎ ድረስ በትክክል እንዲጠበቅ ፕሪሚየም እና ዜሮ ኦክስጅን የሚያስተላልፉ ቦርሳዎችን እንጠቀማለን።' },
    PACKAGING_FEAT_1: { en: 'UV-Protected Matte Finish', am: 'ከፀሐይ ብርሃን የሚከላከል ማሸጊያ' },
    PACKAGING_FEAT_2: { en: 'One-Way Degassing Valve', am: 'የአየር ማውጫ ቫልቭ' },
    PACKAGING_FEAT_3: { en: 'Resealable Freshness Zipper', am: 'እንደገና የሚዘጋ ዚፐር' },
    PACKAGING_FEAT_4: { en: 'Recyclable Materials', am: 'እንደገና ጥቅም ላይ ሊውሉ የሚችሉ ቁሳቁሶች' },
    PACKAGING_CTA: { en: 'Request Wholesale Catalog', am: 'የጅምላ ካታሎግ ይጠይቁ' },
    '3D_INTERACT_PROMPT': { en: 'Hover or Touch to Interact', am: 'ለማንቀሳቀስ ይንኩ ወይም ያንዣብቡ' },
};
