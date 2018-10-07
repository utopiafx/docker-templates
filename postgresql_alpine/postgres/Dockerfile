FROM postgres:alpine

# Create the directory as root
RUN mkdir -p /home/sql

# copy the file into its directory
COPY ./startup.sql /home/sql

# Change user permission to it
RUN chown postgres /home/sql

# Switch user here from root to postgres
USER postgres

# setting chmod permission, init a databas
# and running a sql script
RUN chmod 0700 /var/lib/postgresql/data && \
	initdb /var/lib/postgresql/data && \
	echo "host all  all    0.0.0.0/0  md5" >> /var/lib/postgresql/data/pg_hba.conf &&\
	echo "listen_addresses='*'" >> /var/lib/postgresql/data/postgresql.conf &&\	
	pg_ctl start && \
	psql -U postgres -f /home/sql/startup.sql

EXPOSE 5432

# you could also start the database with
# CMD pg_ctl -D /var/lib/postgresql/data -l logfile start