BEGIN;

    DROP TABLE IF EXISTS countries, things_to_do, businesses, experiences
    CASCADE;

CREATE TABLE countries
(
    id SERIAL PRIMARY KEY,
    country_name VARCHAR(255) NOT NULL
);

CREATE TABLE things_to_do
(
    country_id INTEGER REFERENCES countries(id),
    name VARCHAR(255) NOT NULL,
    details TEXT,
    date_time TEXT,
    location TEXT,
    approved BOOL

);
CREATE TABLE businesses
(
    country_id INTEGER REFERENCES countries(id),
    name VARCHAR(255) NOT NULL,
    details TEXT,
    date_time TEXT,
    location TEXT,
    ownership text[],
    approved BOOL
);

CREATE TABLE experiences(
    country_id INTEGER REFERENCES countries(id),
    socials TEXT,
    details TEXT,
    tags text[],
    overall_experience TEXT,
    approved BOOL
);



INSERT INTO experiences (country_id, socials, details, tags, overall_experience, approved) VALUES
    (7, 'social stuff idk', 'Food was Amazing!', {'black', 'queer'}, 'Good', TRUE  )
    (52, 'instagram.com/yolo', 'Troll review', {'black', 'trans'}, 'Bad', FALSE  )


INSERT INTO things_to_do (country_id, name, details, date_time,location, approved) VALUES
    (7, 'Bobby', 'Great view!','date and time string from new Date()', 'Buenos Aires', TRUE);


INSERT INTO businesses (country_id, name, details, date_time, location, ownership, approved) VALUES
    (150, 'Tarek''s Tacos', 'Fantastic service at a great price.', '15 October 2020', 'Downtown', {'black'}, TRUE)

    INSERT INTO countries
        (country_name)

    VALUES
        ('Afghanistan'),
        ('Albania'),
        ('Algeria'),
        ('Andorra'),
        ('Angola'),
        ('Antigua and Barbuda'),
        ('Argentina'),
        ('Armenia'),
        ('Australia'),
        ('Austria'),
        ('Azerbaijan'),
        ('Bahamas'),
        ('Bahrain'),
        ('Bangladesh'),
        ('Barbados'),
        ('Belarus'),
        ('Belgium'),
        ('Belize'),
        ('Benin'),
        ('Bhutan'),
        ('Bolivia'),
        ('Bosnia and Herzegovina'),
        ('Botswana'),
        ('Brazil'),
        ('Brunei'),
        ('Bulgaria'),
        ('Burkina Faso'),
        ('Burundi'),
        ('Cabo Verde'),
        ('Cambodia'),
        ('Cameroon'),
        ('Canada'),
        ('Central African Republic'),
        ('Chad'),
        ('Chile'),
        ('China'),
        ('Colombia'),
        ('Comoros'),
        ('Costa Rica'),
        ('Cote d''Ivoire'),
        ('Croatia'),
        ('Cuba'),
        ('Cyprus'),
        ('Czechia'),
        ('Democratic Republic of Congo'),
        ('Denmark'),
        ('Djibouti'),
        ('Dominica'),
        ('Dominican Republic'),
        ('Ecuador'),
        ('Egypt'),
        ('El Salvador'),
        ('Equatorial Guinea'),
        ('Eritrea'),
        ('Estonia'),
        ('Eswatini'),
        ('Ethiopia'),
        ('Fiji'),
        ('Finland'),
        ('France'),
        ('Gabon'),
        ('Gambia'),
        ('Georgia'),
        ('Germany'),
        ('Ghana'),
        ('Greece'),
        ('Grenada'),
        ('Guatemala'),
        ('Guinea'),
        ('Guinea-Bissau'),
        ('Guyana'),
        ('Haiti'),
        ('Honduras'),
        ('Hungary'),
        ('Iceland'),
        ('India'),
        ('Indonesia'),
        ('Iran'),
        ('Iraq'),
        ('Ireland'),
        ('Israel'),
        ('Italy'),
        ('Jamaica'),
        ('Japan'),
        ('Jordan'),
        ('Kazakhstan'),
        ('Kenya'),
        ('Kiribati'),
        ('Kosovo'),
        ('Kuwait'),
        ('Kyrgyzstan'),
        ('Laos'),
        ('Latvia'),
        ('Lebanon'),
        ('Lesotho'),
        ('Liberia'),
        ('Libya'),
        ('Liechtenstein'),
        ('Lithuania'),
        ('Luxembourg'),
        ('Madagascar'),
        ('Malawi'),
        ('Malaysia'),
        ('Maldives'),
        ('Mali'),
        ('Malta'),
        ('Marshall Islands'),
        ('Mauritania'),
        ('Mauritius'),
        ('Mexico'),
        ('Micronesia'),
        ('Moldova'),
        ('Monaco'),
        ('Mongolia'),
        ('Montenegro'),
        ('Morocco'),
        ('Mozambique'),
        ('Myanmar'),
        ('Namibia'),
        ('Nauru'),
        ('Nepal'),
        ('Netherlands'),
        ('New Zealand'),
        ('Nicaragua'),
        ('Niger'),
        ('Nigeria'),
        ('North Korea'),
        ('North Macedonia'),
        ('Norway'),
        ('Oman'),
        ('Pakistan'),
        ('Palau'),
        ('Palestine'),
        ('Panama'),
        ('Papua New Guinea'),
        ('Paraguay'),
        ('Peru'),
        ('Philippines'),
        ('Poland'),
        ('Portugal'),
        ('Qatar'),
        ('Republic of the Congo'),
        ('Romania'),
        ('Russia'),
        ('Rwanda'),
        ('Saint Kitts and Nevis'),
        ('Saint Lucia'),
        ('Saint Vincent and the Grenadines'),
        ('Samoa'),
        ('San Marino'),
        ('Sao Tome and Principe'),
        ('Saudi Arabia'),
        ('Senegal'),
        ('Serbia'),
        ('Seychelles'),
        ('Sierra Leone'),
        ('Singapore'),
        ('Slovakia'),
        ('Slovenia'),
        ('Solomon Islands'),
        ('Somalia'),
        ('South Africa'),
        ('South Korea'),
        ('South Sudan'),
        ('Spain'),
        ('Sri Lanka'),
        ('Sudan'),
        ('Suriname'),
        ('Sweden'),
        ('Switzerland'),
        ('Syria'),
        ('Taiwan'),
        ('Tajikistan'),
        ('Tanzania'),
        ('Thailand'),
        ('Timor-Leste'),
        ('Togo'),
        ('Tonga'),
        ('Trinidad and Tobago'),
        ('Tunisia'),
        ('Turkey'),
        ('Turkmenistan'),
        ('Tuvalu'),
        ('Uganda'),
        ('Ukraine'),
        ('United Arab Emirates'),
        ('United Kingdom'),
        ('United States of America'),
        ('Uruguay'),
        ('Uzbekistan'),
        ('Vanuatu'),
        ('Vatican City'),
        ('Venezuela'),
        ('Vietnam'),
        ('Yemen'),
        ('Zambia'),
        ('Zimbabwe');








COMMIT;

