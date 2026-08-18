export type SeoContentBlock = {
  title: string;
  body: string;
};

export type PageSeoContent = {
  heading: string;
  introduction: string;
  blocks: [SeoContentBlock, SeoContentBlock, SeoContentBlock];
};

const locationHeroTitles: Record<string, string> = {
  "tapovan": "Royal Safas in Tapovan",
  "muni-ki-reti": "Pagdi Styling in Muni Ki Reti",
  "swarg-ashram": "Traditional Safas in Swarg Ashram",
  "ram-jhula": "Wedding Pagdis in Ram Jhula",
  "laxman-jhula": "Royal Safas in Laxman Jhula",
  "shivpuri": "Destination Safas in Shivpuri",
  "bharat-mandir-area": "Wedding Safas near Bharat Mandir",
  "idpl": "Wedding Pagdis for IDPL",
  "awas-vikas": "Home Wedding Safas in Awas Vikas",
  "shyampur": "Baraati Safas in Shyampur",
  "virbhadra": "Groom Pagdis in Virbhadra",
  "ganga-nagar": "Wedding Safas in Ganga Nagar",
  "barrage-road": "Royal Pagdis near Barrage Road",
  "nirmal-block": "Family Safas in Nirmal Block",
  "rishikesh-bypass": "Baraat Safas near Rishikesh Bypass",
  "haridwar": "Traditional Wedding Safas in Haridwar",
  "dehradun": "Designer Wedding Safas in Dehradun",
  "roorkee": "Royal Wedding Pagdis in Roorkee",
  "muzaffarnagar": "Baraati Safas in Muzaffarnagar",
  "saharanpur": "Wedding Turbans in Saharanpur",
  "najibabad": "Traditional Pagdis in Najibabad",
  "kotdwar": "Wedding Safas in Kotdwar",
  "lansdowne": "Elegant Safas in Lansdowne",
  "narendranagar": "Royal Safas in Narendranagar",
  "devprayag": "Traditional Safas in Devprayag",
  "doiwala": "Wedding Pagdis in Doiwala",
  "kaudiyala": "Destination Safas in Kaudiyala",
  "tehri": "Wedding Safas in Tehri",
  "chamba": "Hill Wedding Pagdis in Chamba",
  "mussoorie": "Designer Safas in Mussoorie",
  "vikasnagar": "Baraati Pagdis in Vikasnagar",
};

const serviceHeroTitles: Record<string, string> = {
  "wedding-safa-tying": "Professional Wedding Safa Tying",
  "groom-pagdi": "Signature Groom Pagdi Styling",
  "baraati-safa": "Coordinated Baraati Safas",
  "destination-wedding-safa": "Destination Wedding Safa Team",
  "family-pagdi": "Refined Family Pagdi Styling",
  "custom-safa-colours": "Custom Wedding Safa Colours",
};

export function getHeroTitle(slug: string, kind: "location" | "service") {
  const title = kind === "location" ? locationHeroTitles[slug] : serviceHeroTitles[slug];
  if (!title) throw new Error(`Missing hero title for ${kind}: ${slug}`);
  return title;
}

const locationProfiles: Record<string, [string, string, string]> = {
  "tapovan": [
    "Tapovan destination weddings often use river-facing hotels, boutique stays and separate guest room blocks. A wedding safa service in Tapovan therefore works best with one central styling room and a guest sequence shared with the planner.",
    "For outdoor portraits and daytime functions, ivory, rust, muted pink and antique-gold groom pagdis retain detail without overpowering the Himalayan setting. A royal wedding safa or softer destination fold can be selected after reviewing the sherwani and jewellery.",
    "Tapovan bookings should include the hotel pin, final baraati safa quantity and the time the groom must be portrait-ready. This allows the professional safa tying team to plan artists, fabrics and a realistic completion window.",
  ],
  "muni-ki-reti": [
    "Muni Ki Reti is a practical base for families whose ceremonies and accommodation sit on different sides of the Rishikesh hospitality belt. Our wedding safa wala in Muni Ki Reti plans the groom pagdi first, followed by close relatives and the wider wedding party.",
    "Traditional wedding pagdis in maroon, saffron, cream or muted gold suit both temple-led ceremonies and hotel celebrations in this area. Parents and brothers can use a coordinated family pagdi while the groom keeps a more detailed kalgi or brooch finish.",
    "Because meeting points can cause avoidable delays, the booking should carry the exact entrance, preparation floor and coordinator number. A confirmed headcount helps us divide professional pagdi tying into fast, orderly batches.",
  ],
  "swarg-ashram": [
    "Swarg Ashram celebrations benefit from a calm, respectful preparation plan suited to the neighbourhood. A wedding safa service in Swarg Ashram can cover an intimate groom appointment, family pagdis or a compact baraat without turning the getting-ready room into a crowded workspace.",
    "Understated cream, saffron, deep red and antique-gold fabrics complement traditional ceremonies here. We favour balanced Rajwadi or classic groom pagdi profiles and use safa accessories selectively so the look remains ceremonial rather than heavy.",
    "Access and the correct arrival point should be confirmed before the event, especially when vehicles cannot stop close to the preparation area. Book the safa tying service with the ready-by time, number of guests and fabric requirement clearly separated.",
  ],
  "ram-jhula": [
    "A Ram Jhula wedding can involve hotels, ghats and ceremony points within a compact but busy area. The wedding safa wala in Ram Jhula needs a precise meeting point and a preparation room where the groom and baraatis can be styled without interrupting other rituals.",
    "For Rishikesh wedding photographs, a structured groom safa in ivory, rust or maroon creates definition against river and heritage backdrops. The wider baraat can use a cleaner repeatable fold in a matching or complementary colour.",
    "We recommend fixing the groom pagdi session before the photographer arrives and giving the family coordinator a separate guest-tying list. This keeps professional safa tying on schedule even when people are moving between properties.",
  ],
  "laxman-jhula": [
    "Laxman Jhula is chosen for intimate destination weddings and distinctly Rishikesh celebrations. A professional wedding safa service here should feel personal: dedicated groom pagdi styling, a considered family palette and an artist plan matched to the actual guest group.",
    "Pastel designer safas, ivory wedding pagdis and restrained jewel tones work well in natural light around this river-side setting. A kalgi, brooch or pearl chain can be added to the groom turban after checking scale against the sherwani embroidery.",
    "Send the accommodation name, map pin and portrait time when booking a safa wala in Laxman Jhula. Early colour approval is useful because destination schedules leave less room for changing fabric after the team has travelled.",
  ],
  "shivpuri": [
    "Shivpuri resort weddings often spread families across cottages, camps or separate buildings. Our destination wedding safa team creates a central tying lounge and a room-wise sequence so the groom, parents and baraatis are ready before the outdoor ceremony or procession.",
    "Bandhani wedding safas, rust-and-cream pagdis and warm saffron tones photograph strongly against Shivpuri's green landscape. For the groom, a refined royal pagdi with one controlled accessory keeps the styling premium and comfortable outdoors.",
    "A Shivpuri safa booking should account for property access, artist travel, guest movement and any early-morning reporting time. Share the final wedding safa package quantity before dispatch so the correct fabric buffer travels with the team.",
  ],
  "bharat-mandir-area": [
    "Weddings around Bharat Mandir Area often bring relatives from several parts of central Rishikesh into one family venue. An on-location safa wala can organise groom styling, family pagdis and baraati safas in the same preparation room before vehicles leave.",
    "Classic Rajasthani safas, maroon wedding pagdis and ivory-gold groom turbans suit traditional family ceremonies in this part of the city. Close relatives may use a slightly richer border while guests retain one consistent fold.",
    "For a smooth wedding safa booking, appoint one family member to confirm arrivals and keep the next batch ready. We use the headcount and departure time to recommend the right number of pagdi tying artists.",
  ],
  "idpl": [
    "IDPL-area weddings are well suited to structured family preparation when quantities are confirmed in advance. A professional safa tying service can separate the groom, immediate family and baraat into clear batches without delaying the ceremony schedule.",
    "Royal red, maroon, cream and antique-gold pagdis create a traditional look for banquet and home functions around IDPL. The groom may choose a more pronounced Rajwadi profile while the baraati safa remains lighter and faster to tie.",
    "Tell us whether the requirement is tying only, fabric with service, or a complete wedding safa package. Quantity, working space and ready-by time determine artist count and the most practical sequence for the IDPL venue.",
  ],
  "awas-vikas": [
    "Awas Vikas families frequently prefer at-home safa tying before travelling together to a banquet or wedding venue. The artist setup can remain compact while still giving the groom a private, unhurried pagdi appointment.",
    "For residential wedding functions, cream, maroon, saffron and Bandhani safas provide a festive look that carries well from home rituals to venue photographs. Elders can receive a softer family pagdi fit for greater comfort.",
    "When booking a safa wala in Awas Vikas, share parking guidance, the room available for styling and the exact vehicle departure time. A small quantity buffer is sensible when relatives may join at the last moment.",
  ],
  "shyampur": [
    "Shyampur celebrations often combine local family rituals with guests arriving from outside Rishikesh. A wedding safa service in Shyampur can keep the groom preparation separate while an organised baraati station handles changing arrival times.",
    "Warm mustard, rust, maroon and ivory groom pagdis work across daytime and evening functions here. Two coordinated safa colours can distinguish close family from the wider wedding party without making group photographs look fragmented.",
    "The most useful booking details are the venue pin, arrival pattern, final safa quantity and procession departure. We then build a professional pagdi tying plan with enough capacity for late but expected family members.",
  ],
  "virbhadra": [
    "Virbhadra wedding schedules may begin with home rituals and continue at a different Rishikesh venue. Our wedding safa wala plans around both points, ensuring the groom pagdi is camera-ready before the faster family and baraati service starts.",
    "A classic ivory or gold groom turban pairs well with embroidered sherwanis, while wine, maroon or saffron baraat safas provide clear colour in procession photographs. Accessories are positioned after the final outfit is worn.",
    "Share both ceremony and departure timings rather than only the venue start time. For larger Virbhadra groups, multiple safa artists protect the photography window and prevent the last guests from being rushed.",
  ],
  "ganga-nagar": [
    "Ganga Nagar families can arrange a convenient home, hotel or nearby venue safa service without travelling to a showroom. The complete requirement—from groom pagdi to wedding guest safas—is prepared from approved references before arrival.",
    "Traditional red and maroon safas suit formal ceremonies, while ivory, sage or muted pink can support a softer contemporary wedding palette. The groom remains distinctive through the fold, border or a single kalgi rather than excess decoration.",
    "A Ganga Nagar safa booking should state fabric ownership, colour choice and separate quantities for groom, family and baraat. This prevents package confusion and lets the team arrive with the correct accessories and artist count.",
  ],
  "barrage-road": [
    "Barrage Road functions benefit from disciplined timing when the preparation and procession windows sit close together. A professional wedding safa service uses one well-lit room and a queue managed by the family coordinator.",
    "Structured Jodhpuri pagdis and clean Rajwadi safas suit formal venue entries in this area. For outdoor movement, lighter fabrics and controlled accessory weight keep the groom turban secure and comfortable.",
    "Confirm the venue gate, styling room and baraat departure time while hiring a safa wala near Barrage Road. The group size is converted into a practical batch schedule instead of relying on an unrealistic per-person estimate.",
  ],
  "nirmal-block": [
    "Nirmal Block weddings are often intimate enough for personalised attention to the groom and close family. A local wedding safa wala can create individual fits while still keeping brothers, fathers and friends visually coordinated.",
    "Soft ivory, rose, beige and wine pagdis suit smaller ceremonies and portrait-led celebrations. The groom can use a designer safa profile with a brooch or pearl chain, while relatives receive a simpler comfortable finish.",
    "For an intimate safa package, share each group rather than only the total quantity. Knowing how many elders and children are included helps the Nirmal Block team plan fit, fabric and preparation time more accurately.",
  ],
  "rishikesh-bypass": [
    "Venues around Rishikesh Bypass are convenient for larger guest movement and outstation arrivals. The wedding safa service should be tied to the exact property gate and preparation room, not only the venue's commonly used name.",
    "Bold maroon, saffron and rust baraati safas remain visible in larger procession groups, while an ivory-gold groom pagdi gives the dulha a distinct focal point. One repeatable guest fold keeps the full party consistent.",
    "Large wedding safa packages require a final count, a small approved buffer and enough artists for the available window. We also account for the time guests need to move from the tying room to the vehicle assembly point.",
  ],
  "haridwar": [
    "Haridwar weddings often balance traditional ceremonies with movement between hotels, family homes and banquet venues. Our travelling wedding safa team fixes one preparation base and completes groom pagdi and baraati tying before the next journey begins.",
    "Saffron, red, cream and antique-gold traditional pagdis complement the ceremonial character of Haridwar. For a premium groom look, a Rajwadi fold with a balanced kalgi can be paired with simpler family and guest safas.",
    "Book the Haridwar safa wala with the precise locality, route, reporting time and final quantity. Travel and setup are included in the planning so an early ritual or baraat departure does not leave the last group unfinished.",
  ],
  "dehradun": [
    "Dehradun weddings range from city lawns to hotel and resort celebrations, so the safa service must be built around the property rather than a generic city schedule. We coordinate the groom's private session with the wider wedding-party flow.",
    "Designer groom pagdis in ivory, sage, wine or muted gold suit Dehradun's modern venue style, while Bandhani or maroon baraati safas bring stronger traditional colour. Fabric is reviewed for both daylight portraits and indoor lighting.",
    "For a Dehradun wedding safa package, share venue access, guest quantity and whether the same team is required for more than one function. Travel time and an early start may require an additional artist or previous-day setup.",
  ],
  "roorkee": [
    "Roorkee bookings are handled as scheduled outstation assignments with a clear arrival and completion window. The wedding safa wala brings the approved groom pagdi, family fabrics and guest quantities together rather than depending on local last-minute replacements.",
    "Traditional maroon, rust, cream and red safas work well for large family weddings in Roorkee. A refined Jodhpuri or Rajwadi groom profile can add distinction while the baraat uses a consistent quicker fold.",
    "Finalise quantities and colours before the team departs from Rishikesh. A complete Roorkee booking should include route, venue pin, ready-by time and whether travel or accommodation is needed for an early ceremony.",
  ],
  "muzaffarnagar": [
    "Muzaffarnagar celebrations commonly require a dedicated travelling team for the dulha, close relatives and a substantial baraat. Professional safa tying is planned as a production schedule, with guest batches ready before procession assembly.",
    "Colour-rich Bandhani, red, maroon and mustard wedding safas create a strong North Indian baraat look. The groom can carry a royal pagdi with a kalgi or sarpech while family colours remain complementary.",
    "Wedding safa price and team size depend on group quantity, travel, reporting time and whether multiple ceremonies are included. Sharing these together produces a more accurate package than requesting a city-only rate.",
  ],
  "saharanpur": [
    "Saharanpur weddings can be covered by an advance-scheduled safa team for complete family and baraati groups. A single coordinator keeps guests moving through the tying area while the groom receives a separate detailed appointment.",
    "Deep red, wine, mustard and cream traditional safas suit large celebrations and evening venue lighting. For close family, a bordered pagdi or brooch detail can create hierarchy without introducing unrelated colours.",
    "An early reporting time is often the safest choice for outstation wedding turban tying in Saharanpur. Confirm headcount, venue access and procession time so the artists and fabric reach the property with a sensible buffer.",
  ],
  "najibabad": [
    "Najibabad is served as a pre-planned destination assignment rather than an on-call booking. The team travels with the selected wedding safas, groom accessories and a quantity buffer agreed before departure.",
    "Classic maroon, saffron and ivory pagdis provide a versatile traditional palette for home and banquet functions. A clean groom turban profile photographs well while remaining comfortable through longer ceremonies.",
    "Send the venue pin, reporting time and estimated headcount in one enquiry when hiring a safa wala for Najibabad. Clear information is essential because additional fabric or artists cannot be arranged as easily after travel begins.",
  ],
  "kotdwar": [
    "Kotdwar is a natural extension of the Rishikesh service area for organised wedding groups and gateway-hill celebrations. A travelling safa wala can style the groom, parents and baraatis at the hotel, home or wedding venue.",
    "Rust, cream, maroon and forest-influenced green palettes suit Kotdwar's mix of city and hill settings. Structured groom pagdis hold their shape in portraits, while lighter family safas remain comfortable during travel and procession time.",
    "Early ceremonies need travel and setup time added before the first tying slot. Share the groom's ready time—not only the baraat time—so the Kotdwar wedding safa team can protect portraits and family rituals.",
  ],
  "lansdowne": [
    "Lansdowne destination weddings are usually intimate, hotel-led and strongly focused on photography. The wedding safa service is planned with resort access, hill travel and a covered preparation space in mind.",
    "Ivory, muted gold, sage, rust and pastel groom pagdis complement the pine and heritage-hotel setting. A softer destination fold or refined Jodhpuri profile keeps the look elegant without feeling oversized in close portraits.",
    "Weather and road timing can affect a Lansdowne booking, especially for morning functions. Confirm whether the artists need accommodation and keep all approved fabrics at the venue before the wedding-day schedule begins.",
  ],
  "narendranagar": [
    "Narendranagar's destination properties suit polished wedding styling with close coordination between the hotel, planner and safa team. The groom pagdi appointment is fixed before portraits, followed by room-wise family and guest batches.",
    "Ivory, antique gold, rust and deep maroon safas pair beautifully with palace-inspired interiors and hill views. A royal groom pagdi can use one statement kalgi while the wedding party follows a quieter coordinated fold.",
    "Property access and preparation-room allocation should be cleared before the artists report. For multi-day Narendranagar celebrations, list each function separately so the destination wedding safa package includes the right colours and staffing.",
  ],
  "devprayag": [
    "Devprayag functions require focused travel planning and a compact, fully confirmed safa selection. Our destination team carries the groom pagdi, family colours and baraati quantity to the venue after the final schedule is approved.",
    "Saffron, ivory, maroon and muted gold traditional pagdis respect the ceremonial setting while remaining distinctive in outdoor photographs. A lighter fabric choice can improve comfort during longer rituals and changing hill weather.",
    "Road conditions, reporting time and possible artist accommodation are part of the Devprayag safa booking. Morning ceremonies should be planned early enough to avoid depending on same-day travel without a buffer.",
  ],
  "doiwala": [
    "Doiwala offers flexible access from Rishikesh while still benefiting from a venue-specific wedding safa plan. Multiple artists can handle the groom, family and larger baraati groups within one preparation window.",
    "Maroon, ivory, mustard and rose-pink wedding safas suit lawns, banquet spaces and home ceremonies around Doiwala. The groom can use a more sculpted pagdi profile while guest turbans stay uniform and comfortable.",
    "Share the map pin, separate group quantities and ready-by time when booking professional pagdi tying in Doiwala. This lets us recommend a package and artist count based on the actual schedule rather than distance alone.",
  ],
  "kaudiyala": [
    "Kaudiyala resort weddings are destination-led, with guests often preparing in separate cottages or room clusters. A central safa styling lounge and a room-wise calling sequence help the entire wedding party finish together.",
    "Rust, saffron, ivory and patterned Bandhani safas work naturally with river and forest surroundings. The groom pagdi can carry a refined brooch or feather detail, provided it remains secure for outdoor movement.",
    "A Kaudiyala wedding safa package should include travel, property access, guest distribution and the last safe arrival time. Confirm fabric quantities before dispatch because nearby replacement options are limited.",
  ],
  "tehri": [
    "Tehri celebrations often use scenic properties where distance, weather and venue access shape the wedding schedule. The destination safa team builds in an arrival buffer and sets up before the groom's photography window.",
    "Ivory, blue, rust, wine and antique-gold groom pagdis photograph well against lake and hill settings. Coordinated family safas can use lighter shades while a deeper groom colour creates separation in wide outdoor frames.",
    "For Tehri, confirm whether artist accommodation is required for an early event and provide the exact property route. Wedding safa cost is then based on quantity, service scope, travel and the number of functions—not a generic city rate.",
  ],
  "chamba": [
    "Chamba's hill setting suits intimate destination weddings where comfort and preparation timing matter. The safa team can work from one hotel room or lounge, styling the groom first and then close family and guests.",
    "Understated ivory, sage, beige, rust and muted-gold pagdis suit the landscape and cooler visual palette. Lighter fabrics and controlled accessory weight help the groom remain comfortable throughout portraits and ceremony time.",
    "Share temperature, function timing, venue access and guest count for a practical Chamba wedding safa booking. If the ceremony begins early, artist stay and previous-day arrival should be considered in advance.",
  ],
  "mussoorie": [
    "Mussoorie destination weddings demand polished styling and disciplined hotel coordination. Our wedding safa team confirms entry rules, preparation rooms and the sequence for guests staying across different floors or properties.",
    "Ivory, pastel pink, wine, emerald and antique-gold designer pagdis suit hotel interiors, lawns and hillside portraits. The groom's safa profile is balanced against the sherwani collar, jewellery and any kalgi or feather detail.",
    "Traffic and weather make a realistic reporting buffer essential for Mussoorie. A complete destination wedding safa enquiry should list each function, quantity, colour direction and whether the artists need accommodation.",
  ],
  "vikasnagar": [
    "Vikasnagar weddings can be served by a scheduled travelling team for the groom and full baraati group. The service is organised around route, venue access and a fixed completion time before procession movement.",
    "Traditional maroon, red, mustard and cream safas offer strong colour for larger celebrations, while the groom can use ivory-gold or a deeper contrast pagdi. One consistent guest fold keeps group portraits orderly.",
    "The number of artists depends on final headcount and available tying time. Share both when booking a Vikasnagar safa wala so travel and package pricing reflect the real requirement rather than a rough estimate.",
  ],
};

const serviceProfiles: Record<string, [string, string, string]> = {
  "wedding-safa-tying": [
    "Professional wedding safa tying combines fabric planning, artist scheduling and on-location execution. We separate the groom's detailed appointment from family and baraati batches so the final group looks coordinated without delaying the procession.",
    "Rajasthani, Rajwadi, Jodhpuri, Marwari and Bandhani safa styles create different height, volume and colour effects. The best wedding safa is selected from the outfit, face profile, event setting and time the groom will wear it.",
    "Wedding safa price depends on fabric, quantity, fold, accessories, travel and artist count. Share the event date, venue, ready-by time and separate groom, family and guest quantities for a useful package recommendation.",
  ],
  "groom-pagdi": [
    "A groom pagdi is styled as the visual centre of the wedding party, not as a faster version of the guest safa. The artist studies the sherwani collar, face profile, jewellery and portrait schedule before shaping the final fold.",
    "A royal pagdi, designer safa, Jodhpuri profile or traditional wedding turban can be finished with a kalgi, brooch, feather or pearl chain. Each accessory is scaled carefully so it supports the groom rather than hiding the fabric work.",
    "Book groom pagdi styling after the main outfit and colour direction are selected. A trial or detailed reference consultation is useful for highly specific profiles, unusual fabrics or a groom who wants to compare two shapes.",
  ],
  "baraati-safa": [
    "A baraati safa service is designed for speed, consistency and a strong group identity. Guests are divided into batches and each artist follows one agreed fold so the procession photographs feel coordinated from front to back.",
    "Bandhani, maroon, saffron, pink and mustard wedding-party safas create visible colour in a moving baraat. Parents and brothers can use a complementary shade or border while the wider guest group stays uniform.",
    "Baraati safa packages are calculated from guest quantity and the time available before departure. Keep a small fabric buffer for late additions and appoint one coordinator to keep the next group ready for tying.",
  ],
  "destination-wedding-safa": [
    "A destination wedding safa team coordinates travel, hotel access, room blocks and multi-function schedules before choosing artist count. The service can move from a groom appointment to family rooms and a central guest lounge without losing the ready-by time.",
    "Destination settings suit refined ivory, rust, muted gold, pastel and jewel-tone pagdis chosen for both natural light and venue interiors. Fabrics and accessories are consolidated before travel so each function has a complete styling kit.",
    "Share the property, route, reporting time, accommodation need and event-wise quantities when requesting a destination wedding safa quote. Early planning is especially important for hill venues and peak wedding dates.",
  ],
  "family-pagdi": [
    "Family pagdi styling creates a clear relationship between the groom, fathers, brothers, uncles and children. The groom keeps the signature profile while relatives use a repeatable coordinated fold suited to their comfort and role.",
    "Two complementary colours can identify both families without making the wedding party look disconnected. Elders may receive a softer fit, and close relatives can use a subtle border or brooch detail.",
    "For a family pagdi package, share quantities by group and mention elders or children in advance. This helps the artist plan sizes, tension, colour distribution and enough time for personalised fitting.",
  ],
  "custom-safa-colours": [
    "Custom wedding safa colours connect the groom and wedding party with sherwanis, lehengas, flowers and décor. We review visual references and build a controlled palette that remains coherent in daylight, indoor lighting and photography.",
    "Ivory and antique gold feel understated; maroon and red are traditional; rust and saffron bring warmth; sage, pink and blue support softer modern weddings. The groom can use contrast while family and baraatis stay within related shades.",
    "Finalise custom safa colours after the principal outfits are selected and before bulk fabric is prepared. Screen colours can shift, so physical fabric comparison is recommended when an exact match is important.",
  ],
};

function makeContent(pageName: string, profile: [string, string, string], isLocation: boolean): PageSeoContent {
  return {
    heading: isLocation ? `Wedding safa planning for ${pageName}` : `${pageName}: styles, packages and booking guidance`,
    introduction: isLocation
      ? `This ${pageName} guide combines local preparation needs with high-intent wedding safa, groom pagdi and baraati safa searches from our keyword research.`
      : `A practical guide built around the service terms couples and families use when comparing professional safa tying in Rishikesh.`,
    blocks: [
      { title: isLocation ? `Wedding safa service in ${pageName}` : "What the service includes", body: profile[0] },
      { title: isLocation ? `Groom pagdi styles for ${pageName}` : "Styles, colours and finishing", body: profile[1] },
      { title: isLocation ? `Booking and safa packages in ${pageName}` : "Price, packages and booking", body: profile[2] },
    ],
  };
}

export function getLocationSeoContent(slug: string, name: string): PageSeoContent {
  const profile = locationProfiles[slug];
  if (!profile) throw new Error(`Missing SEO content profile for location: ${slug}`);
  return makeContent(name, profile, true);
}

export function getServiceSeoContent(slug: string, name: string): PageSeoContent {
  const profile = serviceProfiles[slug];
  if (!profile) throw new Error(`Missing SEO content profile for service: ${slug}`);
  return makeContent(name, profile, false);
}
